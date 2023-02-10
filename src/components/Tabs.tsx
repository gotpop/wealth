import { TabItem } from "./TabsItem";

export const Tabs = () => (
  <section className="tabs">
    <nav>
      <div>
        <button>PERSONAL FINANCE</button>
      </div>
      <div>
        <button>CAREERS</button>
      </div>
      <div>
        <button>START-UPS</button>
      </div>
      <div>
        <button>TRENDING</button>
      </div>
    </nav>
    <TabItem />
  </section>
)
