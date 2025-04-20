import EventEmitter from 'events';

declare class HzKrpano {
    event: EventEmitter;
    constructor();
    init(): void;
    on(event: string, callback: any): void;
    loadSrcipt(): void;
}

export { HzKrpano as default };
