import React from "react";

function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];
  const { selectedTab, setSelectedTab, todos } = props;

  return (
    <nav>
      {tabs.map((tab, index) => {
        const numTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.completed).length
            : todos.filter((val) => val.completed).length;
        return (
          <button
            key={index}
            className={
              "hover:bg-slate-700 mx-2 mb-2 px-4 py-2 rounded-b-md text-base " +
              (tab === selectedTab ? "bg-slate-500" : "bg-slate-800")
            }
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
            <span className="ps-1">({numTasks})</span>
          </button>
        );
      })}
    </nav>
  );
}

export default Tabs;
