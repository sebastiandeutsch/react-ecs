import _ from 'lodash'

export class Component {
  static displayName = 'unknown'
}

export class Entity {
  constructor () {
    this._components = new Map()
  }
  addComponent (componentClass, params) {
    this._components[componentClass.displayName] = new componentClass(params)
    return this
  }
  getComponent (componentClass) {
    return this._components[componentClass.displayName]
  }

  hasComponent (componentClass) {
    return (this.getComponent(componentClass) !== undefined)
  }
}

export class Pool {
  constructor () {
    this._entities = []
    this._listeners = []
  }

  createEntity () {
    let entity = new Entity()
    this._entities.push(entity)
    this.notifyListeners()
    return entity
  }

  notifyListeners() {
    this._listeners.slice().forEach(listener => listener())
  }

  subscribe(callback) {
    this._listeners.push(callback);

    return function unsubscribe() {
      var index = this._listeners.indexOf(listener);
      this._listeners.splice(index, 1);
    };
  }

  query( componentClass ) {
    return _.filter(this._entities, (entity) => {
      console.log(entity)
      console.log(entity.hasComponent(componentClass))
      return entity.hasComponent(componentClass)
    })
  }
}
