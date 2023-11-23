const form = {display: "flex", flexDirection: "column", gap: "1.5rem"};
const link = {textDecoration: "none", color: "#023020"};
const linkHover = {textDecoration: "underline"};
const formItem = {position: "relative"};
const formItemIcon = {position: "absolute", top: "0.82rem", left: "1.4rem", fontSize: "1.3rem", opacity: "0.4"};
const formItemOther = {display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "calc(1rem * 0.8)", marginBottom: "0.5rem"};
const footer = {marginTop: "1.5rem", fontSize: "calc(1rem * 0.8)",  textAlign: "center"};
const input = {border: "none", outline: "none", background: "rgba(255, 255, 255, 0.3)", padding: "1rem 1.5rem", paddingLeft: "calc(1rem * 3.5)", borderRadius: "100px", width: "85%"};
const inputFocus = {background: "white"};
const checkboxInput = {width: "16px", height: "16px", accentColor: "#023020"};
const button = {background: "black", color: "white", padding: "1rem", borderRadius: "100px", textAlign: "center", textTransform: "uppercase", letterSpacing: "2px", transition: "background 0.5s"};
const buttonHover = {cursor: "pointer"};

export const styles = {
  form : form,
  link : link,
  linkHover : linkHover,
  formItem : formItem,
  formItemIcon : formItemIcon,
  formItemOther : formItemOther,
  footer : footer,
  input : input,
  inputFocus : inputFocus,
  checkboxInput : checkboxInput,
  button : button,
  buttonHover : buttonHover
}