function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            key={item + index}
            href={`#${item}`}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
