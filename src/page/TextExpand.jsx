import { useState } from "react";

export default function TextExpander() {
  return (
    <div>
      <ExpandableText>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </ExpandableText>

      <ExpandableText
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </ExpandableText>

      <ExpandableText expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </ExpandableText>
    </div>
  );
}

function ExpandableText({
  collapsedNumWords = 20,
  expandButtonText = "Read More",
  collapseButtonText = "Show Less",
  className = "",
  buttonColor = "#ff6622",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleIsExpaned() {
    setIsExpanded((prev) => !prev);
  }
  const styleText = {
    display: "flex",
    padding: 20
  };
  return (
    <div className={className}>
      <div style={styleText}>
        {isExpanded ? (
          <>
            {children}
            <span onClick={handleIsExpaned}>
              {isExpanded ? collapseButtonText : expandButtonText}
            </span>
          </>
        ) : (
          <>
            {children.split(" ").slice(0, collapsedNumWords).join(" ")+ "... see more"}

            <span onClick={handleIsExpaned}>
              {isExpanded ? collapseButtonText : expandButtonText}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
