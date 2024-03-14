// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/zhaoqianyu/Documents/project/前端业务hooks库/wuu-react-hooks/node_modules/.pnpm/dumi@2.2.17_@babel+core@7.24.0_@types+node@20.11.27_eslint@7.32.0_jest@29.7.0_prettier@2.8.8__vdgglcywdzcelcgpsfolvdynhe/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"wuu-react-hooks","description":"","version":"1.0.0","license":"ISC","author":""},
      historyType: "hash",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"footer":"Copyright © 2024 wuu-react-hooks","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"hd":{"rules":[]},"rtl":true,"name":"wuu code","logo":"/logo.png","socialLinks":{"github":"https://github.com/ZhaoTongXue0/wuu-react-hooks"},"nav":[{"title":"指南","link":"/guide"},{"title":"Hooks","link":"/hooks"}]},
      _2_level_nav_available: true,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
