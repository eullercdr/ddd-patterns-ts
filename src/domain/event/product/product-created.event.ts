import EventInterface from "../@shared/event.interface";

export default class ProductCreatedEvent implements EventInterface {
  datatimeOccurred: Date;
  eventData: any;

  constructor(eventData: any) {
    this.datatimeOccurred = new Date();
    this.eventData = eventData;
  }
}