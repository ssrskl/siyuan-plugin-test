(()=>{"use strict";var __webpack_modules__={"./src/index.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


//# sourceURL=webpack://plugin-sample/./src/index.scss?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginSample)
/* harmony export */ });
/* harmony import */ var siyuan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! siyuan */ "siyuan");
/* harmony import */ var siyuan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(siyuan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const STORAGE_NAME = "menu-config";
const TAB_TYPE = "custom_tab";
const DOCK_TYPE = "dock_tab";
class PluginSample extends siyuan__WEBPACK_IMPORTED_MODULE_0__.Plugin {
  constructor() {
    super(...arguments);
    this.blockIconEventBindThis = this.blockIconEvent.bind(this);
  }
  updateProtyleToolbar(toolbar) {
    toolbar.push("|");
    toolbar.push({
      name: "insert-smail-emoji",
      icon: "iconEmoji",
      hotkey: "\\u21E7\\u2318I",
      tipPosition: "n",
      tip: this.i18n.insertEmoji,
      click(protyle) {
        protyle.insert("\\u{1F60A}");
      }
    });
    return toolbar;
  }
  onload() {
    this.data[STORAGE_NAME] = { readonlyText: "Readonly" };
    const frontEnd = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.getFrontend)();
    this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";
    this.addIcons(\`<symbol id="iconFace" viewBox="0 0 32 32">
<path d="M13.667 17.333c0 0.92-0.747 1.667-1.667 1.667s-1.667-0.747-1.667-1.667 0.747-1.667 1.667-1.667 1.667 0.747 1.667 1.667zM20 15.667c-0.92 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667 1.667-0.747 1.667-1.667-0.747-1.667-1.667-1.667zM29.333 16c0 7.36-5.973 13.333-13.333 13.333s-13.333-5.973-13.333-13.333 5.973-13.333 13.333-13.333 13.333 5.973 13.333 13.333zM14.213 5.493c1.867 3.093 5.253 5.173 9.12 5.173 0.613 0 1.213-0.067 1.787-0.16-1.867-3.093-5.253-5.173-9.12-5.173-0.613 0-1.213 0.067-1.787 0.16zM5.893 12.627c2.28-1.293 4.040-3.4 4.88-5.92-2.28 1.293-4.040 3.4-4.88 5.92zM26.667 16c0-1.040-0.16-2.040-0.44-2.987-0.933 0.2-1.893 0.32-2.893 0.32-4.173 0-7.893-1.92-10.347-4.92-1.4 3.413-4.187 6.093-7.653 7.4 0.013 0.053 0 0.12 0 0.187 0 5.88 4.787 10.667 10.667 10.667s10.667-4.787 10.667-10.667z"></path>
</symbol>
<symbol id="iconSaving" viewBox="0 0 32 32">
<path d="M20 13.333c0-0.733 0.6-1.333 1.333-1.333s1.333 0.6 1.333 1.333c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333zM10.667 12h6.667v-2.667h-6.667v2.667zM29.333 10v9.293l-3.76 1.253-2.24 7.453h-7.333v-2.667h-2.667v2.667h-7.333c0 0-3.333-11.28-3.333-15.333s3.28-7.333 7.333-7.333h6.667c1.213-1.613 3.147-2.667 5.333-2.667 1.107 0 2 0.893 2 2 0 0.28-0.053 0.533-0.16 0.773-0.187 0.453-0.347 0.973-0.427 1.533l3.027 3.027h2.893zM26.667 12.667h-1.333l-4.667-4.667c0-0.867 0.12-1.72 0.347-2.547-1.293 0.333-2.347 1.293-2.787 2.547h-8.227c-2.573 0-4.667 2.093-4.667 4.667 0 2.507 1.627 8.867 2.68 12.667h2.653v-2.667h8v2.667h2.68l2.067-6.867 3.253-1.093v-4.707z"></path>
</symbol>\`);
    const topBarElement = this.addTopBar({
      icon: "iconFace",
      title: this.i18n.addTopBarIcon,
      position: "right",
      callback: () => {
        if (this.isMobile) {
          this.addMenu();
        } else {
          let rect = topBarElement.getBoundingClientRect();
          if (rect.width === 0) {
            rect = document.querySelector("#barMore").getBoundingClientRect();
          }
          if (rect.width === 0) {
            rect = document.querySelector("#barPlugins").getBoundingClientRect();
          }
          this.addMenu(rect);
        }
      }
    });
    const statusIconTemp = document.createElement("template");
    statusIconTemp.innerHTML = \`<div class="toolbar__item ariaLabel" aria-label="Remove plugin-sample Data">
    <svg>
        <use xlink:href="#iconTrashcan"></use>
    </svg>
</div>\`;
    statusIconTemp.content.firstElementChild.addEventListener("click", () => {
      (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.confirm)("\\u26A0\\uFE0F", this.i18n.confirmRemove.replace("\${name}", this.name), () => {
        this.removeData(STORAGE_NAME).then(() => {
          this.data[STORAGE_NAME] = { readonlyText: "Readonly" };
          (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.showMessage)(\`[\${this.name}]: \${this.i18n.removedData}\`);
        });
      });
    });
    this.addStatusBar({
      element: statusIconTemp.content.firstElementChild
    });
    this.custom = this.addTab({
      type: TAB_TYPE,
      init() {
        this.element.innerHTML = \`<div class="plugin-sample__custom-tab">\${this.data.text}</div>\`;
      },
      beforeDestroy() {
        console.log("before destroy tab:", TAB_TYPE);
      },
      destroy() {
        console.log("destroy tab:", TAB_TYPE);
      }
    });
    this.addCommand({
      langKey: "showDialog",
      hotkey: "\\u21E7\\u2318O",
      callback: () => {
        this.showDialog();
      }
    });
    this.addCommand({
      langKey: "getTab",
      hotkey: "\\u21E7\\u2318M",
      globalCallback: () => {
        console.log(this.getOpenedTab());
      }
    });
    this.addDock({
      config: {
        position: "LeftBottom",
        size: { width: 200, height: 0 },
        icon: "iconSaving",
        title: "Custom Dock",
        hotkey: "\\u2325\\u2318W"
      },
      data: {
        text: "This is my custom dock"
      },
      type: DOCK_TYPE,
      resize() {
        console.log(DOCK_TYPE + " resize");
      },
      update() {
        console.log(DOCK_TYPE + " update");
      },
      init: (dock) => {
        if (this.isMobile) {
          dock.element.innerHTML = \`<div class="toolbar toolbar--border toolbar--dark">
    <svg class="toolbar__icon"><use xlink:href="#iconEmoji"></use></svg>
        <div class="toolbar__text">Custom Dock</div>
    </div>
    <div class="fn__flex-1 plugin-sample__custom-dock">
        \${dock.data.text}
    </div>
</div>\`;
        } else {
          dock.element.innerHTML = \`<div class="fn__flex-1 fn__flex-column">
    <div class="block__icons">
        <div class="block__logo">
            <svg class="block__logoicon"><use xlink:href="#iconEmoji"></use></svg>Custom Dock
        </div>
        <span class="fn__flex-1 fn__space"></span>
        <span data-type="min" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="Min \${(0,siyuan__WEBPACK_IMPORTED_MODULE_0__.adaptHotkey)("\\u2318W")}"><svg><use xlink:href="#iconMin"></use></svg></span>
    </div>
    <div class="fn__flex-1 plugin-sample__custom-dock">
        \${dock.data.text}
    </div>
</div>\`;
        }
      },
      destroy() {
        console.log("destroy dock:", DOCK_TYPE);
      }
    });
    const textareaElement = document.createElement("textarea");
    this.setting = new siyuan__WEBPACK_IMPORTED_MODULE_0__.Setting({
      confirmCallback: () => {
        this.saveData(STORAGE_NAME, { readonlyText: textareaElement.value });
      }
    });
    this.setting.addItem({
      title: "Readonly text",
      direction: "row",
      description: "Open plugin url in browser",
      createActionElement: () => {
        textareaElement.className = "b3-text-field fn__block";
        textareaElement.placeholder = "Readonly text in the menu";
        textareaElement.value = this.data[STORAGE_NAME].readonlyText;
        return textareaElement;
      }
    });
    const btnaElement = document.createElement("button");
    btnaElement.className = "b3-button b3-button--outline fn__flex-center fn__size200";
    btnaElement.textContent = "Open";
    btnaElement.addEventListener("click", () => {
      window.open("https://github.com/siyuan-note/plugin-sample");
    });
    this.setting.addItem({
      title: "Open plugin url",
      description: "Open plugin url in browser",
      actionElement: btnaElement
    });
    this.protyleSlash = [{
      filter: ["insert emoji \\u{1F60A}", "\\u63D2\\u5165\\u8868\\u60C5 \\u{1F60A}", "crbqwx"],
      html: \`<div class="b3-list-item__first"><span class="b3-list-item__text">\${this.i18n.insertEmoji}</span><span class="b3-list-item__meta">\\u{1F60A}</span></div>\`,
      id: "insertEmoji",
      callback(protyle, nodeElement) {
        protyle.insert("\\u{1F60A}");
      }
    }];
    this.protyleOptions = {
      toolbar: [
        "block-ref",
        "a",
        "|",
        "text",
        "strong",
        "em",
        "u",
        "s",
        "mark",
        "sup",
        "sub",
        "clear",
        "|",
        "code",
        "kbd",
        "tag",
        "inline-math",
        "inline-memo"
      ]
    };
    console.log(this.i18n.helloPlugin);
  }
  onLayoutReady() {
    this.loadData(STORAGE_NAME);
    console.log(\`frontend: \${(0,siyuan__WEBPACK_IMPORTED_MODULE_0__.getFrontend)()}; backend: \${(0,siyuan__WEBPACK_IMPORTED_MODULE_0__.getBackend)()}\`);
  }
  onunload() {
    console.log(this.i18n.byePlugin);
  }
  uninstall() {
    console.log("uninstall");
  }
  updateCards(options) {
    return __async(this, null, function* () {
      options.cards.sort((a, b) => {
        if (a.blockID < b.blockID) {
          return -1;
        }
        if (a.blockID > b.blockID) {
          return 1;
        }
        return 0;
      });
      return options;
    });
  }
  /* \u81EA\u5B9A\u4E49\u8BBE\u7F6E
      openSetting() {
          const dialog = new Dialog({
              title: this.name,
              content: \`<div class="b3-dialog__content"><textarea class="b3-text-field fn__block" placeholder="readonly text in the menu"></textarea></div>
  <div class="b3-dialog__action">
      <button class="b3-button b3-button--cancel">\${this.i18n.cancel}</button><div class="fn__space"></div>
      <button class="b3-button b3-button--text">\${this.i18n.save}</button>
  </div>\`,
              width: this.isMobile ? "92vw" : "520px",
          });
          const inputElement = dialog.element.querySelector("textarea");
          inputElement.value = this.data[STORAGE_NAME].readonlyText;
          const btnsElement = dialog.element.querySelectorAll(".b3-button");
          dialog.bindInput(inputElement, () => {
              (btnsElement[1] as HTMLButtonElement).click();
          });
          inputElement.focus();
          btnsElement[0].addEventListener("click", () => {
              dialog.destroy();
          });
          btnsElement[1].addEventListener("click", () => {
              this.saveData(STORAGE_NAME, {readonlyText: inputElement.value});
              dialog.destroy();
          });
      }
      */
  eventBusPaste(event) {
    event.preventDefault();
    event.detail.resolve({
      textPlain: event.detail.textPlain.trim()
    });
  }
  eventBusLog({ detail }) {
    console.log(detail);
  }
  blockIconEvent({ detail }) {
    detail.menu.addItem({
      id: "pluginSample_removeSpace",
      iconHTML: "",
      label: this.i18n.removeSpace,
      click: () => {
        const doOperations = [];
        detail.blockElements.forEach((item) => {
          const editElement = item.querySelector('[contenteditable="true"]');
          if (editElement) {
            editElement.textContent = editElement.textContent.replace(/ /g, "");
            doOperations.push({
              id: item.dataset.nodeId,
              data: item.outerHTML,
              action: "update"
            });
          }
        });
        detail.protyle.getInstance().transaction(doOperations);
      }
    });
  }
  showDialog() {
    const dialog = new siyuan__WEBPACK_IMPORTED_MODULE_0__.Dialog({
      title: \`SiYuan \${siyuan__WEBPACK_IMPORTED_MODULE_0__.Constants.SIYUAN_VERSION}\`,
      content: \`<div class="b3-dialog__content">
    <div>appId:</div>
    <div class="fn__hr"></div>
    <div class="plugin-sample__time">\${this.app.appId}</div>
    <div class="fn__hr"></div>
    <div class="fn__hr"></div>
    <div>API demo:</div>
    <div class="fn__hr"></div>
    <div class="plugin-sample__time">System current time: <span id="time"></span></div>
    <div class="fn__hr"></div>
    <div class="fn__hr"></div>
    <div>Protyle demo:</div>
    <div class="fn__hr"></div>
    <div id="protyle" style="height: 360px;"></div>
</div>\`,
      width: this.isMobile ? "92vw" : "560px",
      height: "540px"
    });
    new siyuan__WEBPACK_IMPORTED_MODULE_0__.Protyle(this.app, dialog.element.querySelector("#protyle"), {
      blockId: this.getEditor().protyle.block.rootID
    });
    (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.fetchPost)("/api/system/currentTime", {}, (response) => {
      dialog.element.querySelector("#time").innerHTML = new Date(response.data).toString();
    });
  }
  addMenu(rect) {
    const menu = new siyuan__WEBPACK_IMPORTED_MODULE_0__.Menu("topBarSample", () => {
      console.log(this.i18n.byeMenu);
    });
    menu.addItem({
      icon: "iconSettings",
      label: "Open Setting",
      accelerator: this.commands[0].customHotkey,
      click: () => {
        (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openSetting)(this.app);
      }
    });
    menu.addItem({
      icon: "iconInfo",
      label: "Dialog(open doc first)",
      accelerator: this.commands[0].customHotkey,
      click: () => {
        this.showDialog();
      }
    });
    menu.addItem({
      icon: "iconFocus",
      label: "Select Opened Doc(open doc first)",
      accelerator: this.commands[0].customHotkey,
      click: () => {
        (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.getModelByDockType)("file").selectItem(this.getEditor().protyle.notebookId, this.getEditor().protyle.path);
      }
    });
    if (!this.isMobile) {
      menu.addItem({
        icon: "iconFace",
        label: "Open Custom Tab",
        click: () => {
          const tab = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openTab)({
            app: this.app,
            custom: {
              icon: "iconFace",
              title: "Custom Tab",
              data: {
                text: siyuan__WEBPACK_IMPORTED_MODULE_0__.platformUtils.isHuawei() ? "Hello, Huawei!" : "This is my custom tab"
              },
              id: this.name + TAB_TYPE
            }
          });
          console.log(tab);
        }
      });
      menu.addItem({
        icon: "iconImage",
        label: "Open Asset Tab(First open the Chinese help document)",
        click: () => {
          const tab = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openTab)({
            app: this.app,
            asset: {
              path: "assets/paragraph-20210512165953-ag1nib4.svg"
            }
          });
          console.log(tab);
        }
      });
      menu.addItem({
        icon: "iconFile",
        label: "Open Doc Tab(open doc first)",
        click: () => __async(this, null, function* () {
          const tab = yield (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openTab)({
            app: this.app,
            doc: {
              id: this.getEditor().protyle.block.rootID
            }
          });
          console.log(tab);
        })
      });
      menu.addItem({
        icon: "iconSearch",
        label: "Open Search Tab",
        click: () => {
          const tab = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openTab)({
            app: this.app,
            search: {
              k: "SiYuan"
            }
          });
          console.log(tab);
        }
      });
      menu.addItem({
        icon: "iconRiffCard",
        label: "Open Card Tab",
        click: () => {
          const tab = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openTab)({
            app: this.app,
            card: {
              type: "all"
            }
          });
          console.log(tab);
        }
      });
      menu.addItem({
        icon: "iconLayout",
        label: "Open Float Layer(open doc first)",
        click: () => {
          this.addFloatLayer({
            ids: [this.getEditor().protyle.block.rootID],
            x: window.innerWidth - 768 - 120,
            y: 32
          });
        }
      });
      menu.addItem({
        icon: "iconOpenWindow",
        label: "Open Doc Window(open doc first)",
        click: () => {
          (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openWindow)({
            doc: { id: this.getEditor().protyle.block.rootID }
          });
        }
      });
    } else {
      menu.addItem({
        icon: "iconFile",
        label: "Open Doc(open doc first)",
        click: () => {
          (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.openMobileFileById)(this.app, this.getEditor().protyle.block.rootID);
        }
      });
    }
    menu.addItem({
      icon: "iconLock",
      label: "Lockscreen",
      click: () => {
        (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.lockScreen)(this.app);
      }
    });
    menu.addItem({
      icon: "iconQuit",
      label: "Exit Application",
      click: () => {
        (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.exitSiYuan)();
      }
    });
    menu.addItem({
      icon: "iconScrollHoriz",
      label: "Event Bus",
      type: "submenu",
      submenu: [{
        icon: "iconSelect",
        label: "On ws-main",
        click: () => {
          this.eventBus.on("ws-main", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off ws-main",
        click: () => {
          this.eventBus.off("ws-main", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On click-blockicon",
        click: () => {
          this.eventBus.on("click-blockicon", this.blockIconEventBindThis);
        }
      }, {
        icon: "iconClose",
        label: "Off click-blockicon",
        click: () => {
          this.eventBus.off("click-blockicon", this.blockIconEventBindThis);
        }
      }, {
        icon: "iconSelect",
        label: "On click-pdf",
        click: () => {
          this.eventBus.on("click-pdf", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off click-pdf",
        click: () => {
          this.eventBus.off("click-pdf", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On click-editorcontent",
        click: () => {
          this.eventBus.on("click-editorcontent", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off click-editorcontent",
        click: () => {
          this.eventBus.off("click-editorcontent", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On click-editortitleicon",
        click: () => {
          this.eventBus.on("click-editortitleicon", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off click-editortitleicon",
        click: () => {
          this.eventBus.off("click-editortitleicon", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On click-flashcard-action",
        click: () => {
          this.eventBus.on("click-flashcard-action", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off click-flashcard-action",
        click: () => {
          this.eventBus.off("click-flashcard-action", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-noneditableblock",
        click: () => {
          this.eventBus.on("open-noneditableblock", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-noneditableblock",
        click: () => {
          this.eventBus.off("open-noneditableblock", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On loaded-protyle-static",
        click: () => {
          this.eventBus.on("loaded-protyle-static", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off loaded-protyle-static",
        click: () => {
          this.eventBus.off("loaded-protyle-static", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On loaded-protyle-dynamic",
        click: () => {
          this.eventBus.on("loaded-protyle-dynamic", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off loaded-protyle-dynamic",
        click: () => {
          this.eventBus.off("loaded-protyle-dynamic", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On switch-protyle",
        click: () => {
          this.eventBus.on("switch-protyle", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off switch-protyle",
        click: () => {
          this.eventBus.off("switch-protyle", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On destroy-protyle",
        click: () => {
          this.eventBus.on("destroy-protyle", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off destroy-protyle",
        click: () => {
          this.eventBus.off("destroy-protyle", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-doctree",
        click: () => {
          this.eventBus.on("open-menu-doctree", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-doctree",
        click: () => {
          this.eventBus.off("open-menu-doctree", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-blockref",
        click: () => {
          this.eventBus.on("open-menu-blockref", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-blockref",
        click: () => {
          this.eventBus.off("open-menu-blockref", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-fileannotationref",
        click: () => {
          this.eventBus.on("open-menu-fileannotationref", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-fileannotationref",
        click: () => {
          this.eventBus.off("open-menu-fileannotationref", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-tag",
        click: () => {
          this.eventBus.on("open-menu-tag", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-tag",
        click: () => {
          this.eventBus.off("open-menu-tag", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-link",
        click: () => {
          this.eventBus.on("open-menu-link", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-link",
        click: () => {
          this.eventBus.off("open-menu-link", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-image",
        click: () => {
          this.eventBus.on("open-menu-image", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-image",
        click: () => {
          this.eventBus.off("open-menu-image", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-av",
        click: () => {
          this.eventBus.on("open-menu-av", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-av",
        click: () => {
          this.eventBus.off("open-menu-av", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-content",
        click: () => {
          this.eventBus.on("open-menu-content", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-content",
        click: () => {
          this.eventBus.off("open-menu-content", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-breadcrumbmore",
        click: () => {
          this.eventBus.on("open-menu-breadcrumbmore", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-breadcrumbmore",
        click: () => {
          this.eventBus.off("open-menu-breadcrumbmore", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-menu-inbox",
        click: () => {
          this.eventBus.on("open-menu-inbox", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-menu-inbox",
        click: () => {
          this.eventBus.off("open-menu-inbox", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On input-search",
        click: () => {
          this.eventBus.on("input-search", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off input-search",
        click: () => {
          this.eventBus.off("input-search", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On paste",
        click: () => {
          this.eventBus.on("paste", this.eventBusPaste);
        }
      }, {
        icon: "iconClose",
        label: "Off paste",
        click: () => {
          this.eventBus.off("paste", this.eventBusPaste);
        }
      }, {
        icon: "iconSelect",
        label: "On open-siyuan-url-plugin",
        click: () => {
          this.eventBus.on("open-siyuan-url-plugin", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-siyuan-url-plugin",
        click: () => {
          this.eventBus.off("open-siyuan-url-plugin", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On open-siyuan-url-block",
        click: () => {
          this.eventBus.on("open-siyuan-url-block", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off open-siyuan-url-block",
        click: () => {
          this.eventBus.off("open-siyuan-url-block", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On opened-notebook",
        click: () => {
          this.eventBus.on("opened-notebook", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off opened-notebook",
        click: () => {
          this.eventBus.off("opened-notebook", this.eventBusLog);
        }
      }, {
        icon: "iconSelect",
        label: "On closed-notebook",
        click: () => {
          this.eventBus.on("closed-notebook", this.eventBusLog);
        }
      }, {
        icon: "iconClose",
        label: "Off closed-notebook",
        click: () => {
          this.eventBus.off("closed-notebook", this.eventBusLog);
        }
      }]
    });
    menu.addSeparator();
    menu.addItem({
      icon: "iconSparkles",
      label: this.data[STORAGE_NAME].readonlyText || "Readonly",
      type: "readonly"
    });
    if (this.isMobile) {
      menu.fullscreen();
    } else {
      menu.open({
        x: rect.right,
        y: rect.bottom,
        isLeft: true
      });
    }
  }
  getEditor() {
    const editors = (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.getAllEditor)();
    if (editors.length === 0) {
      (0,siyuan__WEBPACK_IMPORTED_MODULE_0__.showMessage)("please open doc first");
      return;
    }
    return editors[0];
  }
}


//# sourceURL=webpack://plugin-sample/./src/index.ts?`)},siyuan:n=>{n.exports=require("siyuan")}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(e!==void 0)return e.exports;var t=__webpack_module_cache__[n]={exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.ts");module.exports=__webpack_exports__})();
