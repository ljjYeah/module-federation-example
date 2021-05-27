import React, { useState, createElement } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.less'

const ProjectAPageA = React.lazy(() => import("projectA/PageA"));
const ProjectAPageB = React.lazy(() => import("projectA/PageB"));
const ProjectBPageC = React.lazy(() => import("projectB/PageC"));
const ProjectBPageD = React.lazy(() => import("projectB/PageD"));

const routes = {
  moduleA: [
    {
      page: 'pageA',
      path: '/moduleA-pageA',
      project: 'projectA',
      component: ProjectAPageA
    },
    {
      page: 'pageB',
      path: '/moduleA-pageB',
      project: 'projectA',
      component: ProjectAPageB
    }
  ],
  moduleB: [
    {
      page: 'pageC',
      path: '/moduleB-pageC',
      project: 'projectB',
      component: ProjectBPageC
    },
    {
      page: 'pageD',
      path: '/moduleB-pageD',
      project: 'projectB',
      component: ProjectBPageD
    }
  ],
  moduleC: [
    {
      page: 'pageC',
      path: '/moduleC-pageC',
      project: 'projectB',
      component: ProjectBPageC
    },
    {
      page: 'pageA',
      path: '/moduleC-pageA',
      project: 'projectA',
      component: ProjectAPageA
    }
  ]
};

const App = () => {
  const pathname = window.location.pathname.length > 1 ?  window.location.pathname : '/moduleA-pageA';
  const [module, page] = pathname.split('/')[1].split('-');
  const [currentModule, setCurrentModule] = useState(module);
  const [currentPage, setCurrentPage] = useState(page);

  const setModule = (module) => {
    if (currentModule === module) return;
    setCurrentModule(module);
  }

  const setPage = (page) => {
    if (currentPage === page) return;
    setCurrentPage(page);
  }

  return <>
    <BrowserRouter>
     <div className='container'>
       <nav>
         <ul>
           {
             Object.keys(routes).map(item=>(
               <li
                 key={item}
                 className={`${currentModule === item ? 'active' : ''}`}
                 onClick={() => setModule(item)}
               >{item}</li>
             ))
           }
         </ul>
       </nav>

       <main>
         <div className='slider'>
           <ul>
             {
               routes[currentModule].map(item=>(
                 <li
                   key={item.path}
                   className={`${currentPage === item.page ? 'active' : ''}`}
                 >
                   <Link to={item.path} onClick={() => setPage(item.page)}>{item.page}</Link>
                 </li>
               ))
             }
           </ul>
         </div>
         <div className='content'>
           <Switch>
             {
               Object.keys(routes).map(module=>{
                 return routes[module].map(page=>(
                   <Route path={page.path}>
                     <React.Suspense fallback="加载中">
                       {createElement(page.component)}
                     </React.Suspense>
                   </Route>
                 ))
               })
             }
             <Route path="/">
               <React.Suspense fallback="加载中">
                 <ProjectAPageA/>
               </React.Suspense>
             </Route>
           </Switch>
         </div>
       </main>
     </div>
    </BrowserRouter>
  </>
};

export default App;
