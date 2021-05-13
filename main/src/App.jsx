import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.less'

const ProjectAPageA = React.lazy(() => import("projectA/PageA"));
const ProjectAPageB = React.lazy(() => import("projectA/PageB"));
const ProjectBPageA = React.lazy(() => import("projectB/PageC"));
const ProjectBPageB = React.lazy(() => import("projectB/PageD"));

const routes = {
  projectA: [
    {
      page: 'pageA',
      path: '/projectA-pageA'
    },
    {
      page: 'pageB',
      path: '/projectA-pageB'
    }
  ],
  projectB: [
    {
      page: 'pageC',
      path: '/projectB-pageC'
    },
    {
      page: 'pageD',
      path: '/projectB-pageD'
    }
  ]
};

const App = () => {
  const pathname = window.location.pathname.length > 1 ?  window.location.pathname : '/projectA-pageA';
  const [project, page] = pathname.split('/')[1].split('-');
  const [currentProject, setCurrentProject] = useState(project);
  const [currentPage, setCurrentPage] = useState(page);

  const setProject = (project) => {
    if (currentProject === project) return;
    setCurrentProject(project);
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
                 className={`${currentProject === item ? 'active' : ''}`}
                 onClick={() => setProject(item)}
               >{item}</li>
             ))
           }
         </ul>
       </nav>

       <main>
         <div className='slider'>
           <ul>
             {
               routes[currentProject].map(item=>(
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
             <Route path="/projectA-pageA">
               <React.Suspense fallback="加载中">
                 <ProjectAPageA/>
               </React.Suspense>
             </Route>
             <Route path="/projectA-pageB">
               <React.Suspense fallback="加载中">
                 <ProjectAPageB/>
               </React.Suspense>
             </Route>
             <Route path="/projectB-pageC">
               <React.Suspense fallback="加载中">
                 <ProjectBPageA/>
               </React.Suspense>
             </Route>
             <Route path="/projectB-pageD">
               <React.Suspense fallback="加载中">
                 <ProjectBPageB/>
               </React.Suspense>
             </Route>
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
