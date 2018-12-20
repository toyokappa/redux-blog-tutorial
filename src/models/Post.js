import { Record } from "immutable";

const PostRecord = Record({
  id: null,
  title: "",
  body: "",
  eyeCatchUrl: "",
  createdAt: null,
  updatedAt: null
});

export default class Entry extends PostRecord {}
