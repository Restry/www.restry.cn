import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
// import FaUser from "react-icons/lib/fa/user";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "JavaScript",
          description: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>, 
            it is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming language.`,
          comment: `That's the only programing language I use on a daily basis. 
            <b>And I love it!</b>`
        },
        {
          id: 2,
          label: "ES2015",
          description: `It's a pseudonym for the latest version of the 
            <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
            ECMAScript</a> aka JavaScript.`,
          comment: `ES6 makes my coding easier.`
        },
        {
          id: 18,
          label: "Babel",
          description: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
            best known for its ability to turn ES2015 into code that runs in browsers 
            which does not support it directly. It lets us use next generation 
            JavaScript, today.`,
          comment: `That's a <b>must-have</b> tool.`
        },
        {
          id: 3,
          label: "HTML5",
          description: `A markup language used for structuring and presenting content on the 
            World Wide Web. It is the fifth and current major version of the 
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
          comment: `There is no web without HTML.`
        },
        {
          id: 4,
          label: "CSS / CSS3",
          description: `Cascading Style Sheets - a style sheet 
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
            used for describing the presentation of a document written in HTML.`,
          comment: `CSS makes the web beautiful.`
        },
        {
          id: 21,
          label: "SCSS/SASS/LESS",
          description: `A scripting <a href="http://sass-lang.com/" target="_blank">language</a> 
          that is interpreted or compiled into Cascading Style Sheets (CSS).`,
          comment: `SASS helps me write and manage CSS code faster.`
        },
         
        {
          id: 6,
          label: "Git",
          description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
            in computer files and coordinating work on those files among multiple people.`,
          comment: `It saved my life, a couple of times ;)`
        },
        {
          id: 19,
          label: "Github",
          description: `A web-based Git version control repository hosting service.`,
          comment: `That's my <a href="https://github.com/restry" target="_blank">Github</a>`
        },
        {
          id: 7,
          label: "React",
          description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
            React makes it painless to create interactive UIs. Build encapsulated components 
            that manage their own state and then compose them to make complex UIs.`,
          comment: `I've been in love since using it for the first time.`
        },
     
        {
          id: 20,
          label: "GraphQL",
          description: `It's a query language for APIs. <a href="http://graphql.org/" target="_blank">GraphQL</a> 
          gives clients the power to ask for exactly what they need and nothing more.`,
          comment: `The <a href="https://www.graph.cool/" target="_blank">Graphcool</a> framework and its
          <b>Cloud</b> service manages the GraphQL backend for my <a href="https://github.com/restry/lazywill-demo" target="_blank">app.</a>`
        },
        {
          id: 10,
          label: "Vue",
          description: `A Javascript Library <a href="https://vue.org/" target="_blank">vue</a> for building user inteface , like react`
        },
        {
          id: 11,
          label: "MongoDB / SQL Server",
          description: `Sql Server is a enterprise database from microsoft , it's very useful.  MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. 
          MongoDB is developed by <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> Inc..`
        },
        {
          id: 12,
          label: "npm",
          description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
            the JavaScript programming language.`
        },
        {
          id: 13,
          label: "Webpack",
          description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
            Webpack takes modules with dependencies and generates static assets representing those modules.`
        },
        {
          id: 14,
          label: "jQuery",
          description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
            the client-side scripting of HTML.`,
          comment: `I used it much and often ... in the past.`
        }, 
        {
          id: 16,
          label: "SharePoint",
          description: `i have four years dev experience with sharepoint.`,
          comment: `SharePoint is a web-based collaborative platform that integrates with Microsoft Office. Launched in 2001, SharePoint is primarily sold as a document management and storage system, but the product is 
          highly configurable and usage varies substantially between organizations.          `
        },
        {
          id: 17,
          label: ".NET",
          description: `.net is my enlightening language. I learned it in school.`,
          comment: `.NET is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, gaming, and IoT. ... `
        }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
