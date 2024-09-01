// import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import KeyButton from "./components/KeyButton";
import "./tailwind.css";
function App() {
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      const key = e.code.toUpperCase();
      // console.log(key);
      document.getElementById(key).classList.add("keyUp");
    });
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      const key = e.code.toUpperCase();
      // console.log(key);
      document.getElementById(key).classList.remove("keyUp");
      document.getElementById(key).classList.add("keyDown");
    });

    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        document.getElementById("MOUSEUP").classList.add("keyUp");
      } else {
        document.getElementById("MOUSEDOWN").classList.add("keyUp");
      }
    });
    // return () => {
    //   document.removeEventListener("keydown", (e) => {
    //     // console.log(e.key);
    //   });
    //   document.removeEventListener("wheel", (e) => {
    //     // console.log(event.deltaY);
    //   });
    // };
  }, []);

  return (
    <>
      <div className="KeyContainer">
        {/* {First Row} */}
        <KeyButton keyName="Esc" keyCode={"ESCAPE"} />

        <KeyButton
          keyName="F1"
          CustomStyle={{ gridColumn: "3" }}
          keyCode={"F1"}
        />
        <KeyButton keyName="F2" keyCode={"F2"} />
        <KeyButton keyName="F3" keyCode={"F3"} />
        <KeyButton keyName="F4" keyCode={"F4"} />
        <KeyButton keyName="F5" keyCode={"F5"} />
        <KeyButton keyName="F6" keyCode={"F6"} />
        <KeyButton keyName="F7" keyCode={"F7"} />
        <KeyButton keyName="F8" keyCode={"F8"} />
        <KeyButton keyName="F9" keyCode={"F9"} />
        <KeyButton keyName="F10" keyCode={"F10"} />
        <KeyButton keyName="F11" keyCode={"F11"} />
        <KeyButton keyName="F12" keyCode={"F12"} />
        <KeyButton keyName="Del" keyCode={"DELETE"} />
        <KeyButton keyName="Pause Break" keyCode={"PAUSE"} />
        <KeyButton keyName="SCR" keyCode={"PRINTSCREEN"} />
        <KeyButton keyName="Home End" keyCode={"HOME"} />

        {/* {Second Row} */}
        <KeyButton keyName="~ `" keyCode={"BACKQUOTE"} />
        <KeyButton keyName="! 1" keyCode={"DIGIT1"} />
        <KeyButton keyName="@ 2" keyCode={"DIGIT2"} />
        <KeyButton keyName="# 3" keyCode={"DIGIT3"} />
        <KeyButton keyName="$ 4" keyCode={"DIGIT4"} />
        <KeyButton keyName="% 5" keyCode={"DIGIT5"} />
        <KeyButton keyName="^ 6" keyCode={"DIGIT6"} />
        <KeyButton keyName="& 7" keyCode={"DIGIT7"} />
        <KeyButton keyName="* 8" keyCode={"DIGIT8"} />
        <KeyButton keyName="( 9" keyCode={"DIGIT9"} />
        <KeyButton keyName=") 0" keyCode={"DIGIT0"} />
        <KeyButton keyName="- _" keyCode={"MINUS"} />
        <KeyButton keyName="+ =" keyCode={"EQUAL"} />
        <KeyButton keyName="← Backs" keyCode={"BACKSPACE"} />
        <KeyButton keyName="NumLK" keyCode={"NUMLOCK"} />
        <KeyButton keyName="/" keyCode={"NUMPADDIVIDE"} />
        <KeyButton keyName="*" keyCode={"NUMPADMULTIPLY"} />
        <KeyButton keyName="-" keyCode={"NUMPADSUBTRACT"} />

        {/* {Third Row} */}
        <KeyButton keyName="TAB ⇆" keyCode={"TAB"} />
        <KeyButton keyName="Q" keyCode={"KEYQ"} />
        <KeyButton keyName="W" keyCode={"KEYW"} />
        <KeyButton keyName="E" keyCode={"KEYE"} />
        <KeyButton keyName="R" keyCode={"KEYR"} />
        <KeyButton keyName="T" keyCode={"KEYT"} />
        <KeyButton keyName="Y" keyCode={"KEYY"} />
        <KeyButton keyName="U" keyCode={"KEYU"} />
        <KeyButton keyName="I" keyCode={"KEYI"} />
        <KeyButton keyName="O" keyCode={"KEYO"} />
        <KeyButton keyName="P" keyCode={"KEYP"} />
        <KeyButton keyName="{ [" keyCode={"BRACKETLEFT"} />
        <KeyButton keyName="} ]" keyCode={"BRACKETRIGHT"} />
        <KeyButton keyName="|  \" keyCode={"BACKSLASH"} />
        <KeyButton keyName="7" keyCode={"NUMPAD7"} />
        <KeyButton keyName="8" keyCode={"NUMPAD8"} />
        <KeyButton keyName="9" keyCode={"NUMPAD9"} />
        <KeyButton
          keyName="+"
          CustomStyle={{ gridRow: "span 2", height: "auto" }}
          keyCode={"NUMPADADD"}
        />

        {/* {Third Row} */}
        <KeyButton keyName="CAPS LOCKS" keyCode={"CAPSLOCK"} />
        <KeyButton keyName="A" keyCode={"KEYA"} />
        <KeyButton keyName="S" keyCode={"KEYS"} />
        <KeyButton keyName="D" keyCode={"KEYD"} />
        <KeyButton keyName="F" keyCode={"KEYF"} />
        <KeyButton keyName="G" keyCode={"KEYG"} />
        <KeyButton keyName="H" keyCode={"KEYH"} />
        <KeyButton keyName="J" keyCode={"KEYJ"} />
        <KeyButton keyName="K" keyCode={"KEYK"} />
        <KeyButton keyName="L" keyCode={"KEYL"} />
        <KeyButton keyName=": ;" keyCode={"SEMICOLON"} />
        <KeyButton keyName='" ' keyCode={"QUOTE"} />
        <KeyButton
          keyName="↲ ENTER"
          CustomClass={"col-span-2 "}
          keyCode={"ENTER"}
        />
        <KeyButton keyName="4" keyCode={"NUMPAD4"} />
        <KeyButton keyName="5" keyCode={"NUMPAD5"} />
        <KeyButton keyName="6" keyCode={"NUMPAD6"} />

        {/* {Fourth Row} */}
        <KeyButton
          keyName="Shift 🡁"
          CustomStyle={{ gridColumn: "span 2" }}
          keyCode={"SHIFTLEFT"}
        />
        <KeyButton keyName="Z" keyCode={"KEYZ"} />
        <KeyButton keyName="X" keyCode={"KEYX"} />
        <KeyButton keyName="C" keyCode={"KEYC"} />
        <KeyButton keyName="V" keyCode={"KEYV"} />
        <KeyButton keyName="B" keyCode={"KEYB"} />
        <KeyButton keyName="N" keyCode={"KEYN"} />
        <KeyButton keyName="M" keyCode={"KEYM"} />
        <KeyButton keyName="< ," keyCode={"COMMA"} />
        <KeyButton keyName="> ." keyCode={"PERIOD"} />
        <KeyButton keyName="? /" keyCode={"SLASH"} />
        <KeyButton
          keyName="Shift 🡁"
          CustomStyle={{ gridColumn: "span 2" }}
          keyCode={"SHIFTRIGHT"}
        />
        <KeyButton keyName="1" keyCode={"NUMPAD1"} />
        <KeyButton keyName="2" keyCode={"NUMPAD2"} />
        <KeyButton keyName="3" keyCode={"NUMPAD3"} />
        <KeyButton
          keyName="Enter"
          CustomStyle={{ gridRow: "span 2", height: "auto" }}
          keyCode={"NUMPADENTER"}
        />

        {/* {Fifth Row} */}
        <KeyButton keyName="CTRL" keyCode={"CONTROLLEFT"} />
        <KeyButton keyName="FN" keyCode={""} />
        <KeyButton keyName="⊞ Win" keyCode={""} />
        <KeyButton keyName="ALT" keyCode={"ALTLEFT"} />
        <KeyButton
          keyName="Space"
          CustomClass={"col-span-6"}
          keyCode={"SPACE"}
        />
        <KeyButton keyName="ALT" keyCode={"ALTRIGHT"} />
        <KeyButton keyName="☰" keyCode={"CONTEXTMENU"} />
        <KeyButton
          keyName="CTRL"
          CustomClass={"col-span-2"}
          keyCode={"CONTROLRIGHT"}
        />
        <KeyButton keyName="🡅" CustomClass={""} keyCode={"ARROWUP"} />
        <KeyButton keyName="0 INSERT" keyCode={"NUMPAD0"} />
        <KeyButton keyName=". DEL" keyCode={"NUMPADDECIMAL"} />

        {/* {Arraow in 7 row} */}
        <KeyButton
          keyName="🡄"
          CustomStyle={{ gridRow: "7", gridColumn: "14" }}
          keyCode={"ARROWLEFT"}
        />
        <KeyButton
          keyName="🡇"
          CustomStyle={{ gridRow: "7", gridColumn: "15" }}
          keyCode={"ARROWDOWN"}
        />
        <KeyButton
          keyName="🡆"
          CustomStyle={{ gridRow: "7", gridColumn: "16" }}
          keyCode={"ARROWRIGHT"}
        />

        {/* {Mouse in 7 row} */}
        <KeyButton
          keyName="⮝"
          keyCode={"MOUSEUP"}
          CustomStyle={{ gridRow: "7", gridColumn: "8 /span 2" }}
        />
        <KeyButton
          keyName="⮟"
          keyCode={"MOUSEDOWN"}
          CustomStyle={{ gridRow: "7", gridColumn: "10/span 2" }}
        />
        <KeyButton
          keyName=""
          CustomStyle={{
            gridRow: "span 2",
            gridColumn: "8/span 4",
            height: "150px",
          }}
        />
      </div>
    </>
  );
}

export default App;
