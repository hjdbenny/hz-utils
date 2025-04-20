import EventEmitter from 'events';

declare class HzKonva {
    event: EventEmitter;
    constructor();
    init(domId: string): void;
    on(event: string, callback: any): void;
}

export { HzKonva as default };
