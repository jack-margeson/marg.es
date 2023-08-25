export class Project {
  name: string;
  description: string;
  long_description: string;
  img_ref: string;

  constructor(
    name: string,
    description: string,
    long_description: string,
    img_ref: string
  ) {
    this.name = name;
    this.description = description;
    this.long_description = long_description;
    this.img_ref = img_ref;
  }
}
