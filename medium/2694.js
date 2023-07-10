// JS challenge day 27
// https://leetcode.com/problems/event-emitter/?utm_campaign=PostD27&utm_medium=Post&utm_source=Post&gio_link_id=lPQDyGjR

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, cb) {
    if (!this.events[event]) this.events[event] = [cb];
    else this.events[event] = [...this.events[event], cb];

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].slice(1);
        return undefined;
      },
    };
  }

  emit(event, args = []) {
    if (!this.events[event]) return [];
    return this.events[event].map((cb) => cb(...args));
  }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
sub1.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]
