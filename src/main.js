import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/comments-slider";
import "./scripts/work";
import "./scripts/contact";