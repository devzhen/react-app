

class PriorityQueueManager {
    static add(action, priority) {
      if (typeof action !== 'function' || action.name === undefined) {
        throw new Error(`Typeof 'action' must be a function`);
      }
  
      if (typeof priority !== 'string') {
        throw new Error(`Typeof 'priority' must be a string`);
      }
  
      if (QUEUE_PRIORITIES[priority] === undefined) {
        throw new Error('Unknow priority');
      }
  
      const actionId = action.name === ''
        ? new Date().getTime().toString(10)
        : action.name;
  
      this.actions[priority][actionId] = action;
      
      PriorityQueueManager.execute();
    }
  
    static reset() {
      this.actions = {
        SUPER_HIGH: {},
        HIGH: {},
        MEDIUM: {},
        LOW: {},
      };
    }
  
    static * getAction() {
      for (const [key, action] of Object.entries(this.actions.SUPER_HIGH)) {
        yield { key, action, priority: QUEUE_PRIORITIES.SUPER_HIGH };
      }
  
      for (const [key, action] of Object.entries(this.actions.HIGH)) {
        yield { key, action, priority: QUEUE_PRIORITIES.HIGH };
      }
  
      for (const [key, action] of Object.entries(this.actions.MEDIUM)) {
        yield { key, action, priority: QUEUE_PRIORITIES.MEDIUM };
      }
  
      for (const [key, action] of Object.entries(this.actions.LOW)) {
        yield { key, action, priority: QUEUE_PRIORITIES.LOW };
      }
    }
  
    static delay(millisec) {
      return new Promise(resolve => {
        setTimeout(() => resolve(), millisec);
      });
    }
  
    static async execute() {
      const generator = PriorityQueueManager.getAction();
  
      for (const obj of generator) {
        const { key, action, priority } = obj;
  
        action();
  
        delete this.actions[priority][key];
      }
    }
  }
  
  PriorityQueueManager.actions = {
    SUPER_HIGH: {},
    HIGH: {},
    MEDIUM: {},
    LOW: {},
  };
  
  export const QUEUE_PRIORITIES = {
    SUPER_HIGH: 'SUPER_HIGH',
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
  }
  
  export default PriorityQueueManager;
  