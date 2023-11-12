import { NavigationDots, SocialMedia } from "../components";

function AppWrap(Component, idName, classNames) {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper ">
          <Component />
          {/* <div className="copyright">
            <p className="p-text">@2023 Muhammed</p>
            <p className="p-text">All right reserved</p>
          </div> */}
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };
}

// In this example, the `AppWrap` HOC takes a functional component as an argument and returns a new functional component that wraps the passed component.

export default AppWrap;
