import { createInertiaApp } from "@inertiajs/react";
import { createElement, ReactNode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "@/layouts";

type ResolvedComponent = {
  default: ResolvedComponent;
  layout?: (page: ReactNode) => ReactNode;
};

createInertiaApp({
  title: (title) => (title ? `${title} - App` : "App"),

  // Disable progress bar
  //
  // see https://inertia-rails.netlify.app/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>("../pages/**/*.tsx", {
      eager: true,
    });

    const page = pages[`../pages/${name}.tsx`];
    page.default.layout ||= (page) => <Layout name="foo">{page}</Layout>;
    return page;
  },

  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(createElement(App, props));
  },
});
