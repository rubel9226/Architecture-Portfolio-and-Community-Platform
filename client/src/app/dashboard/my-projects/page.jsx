'use client'

import { ProjectsProvider } from '../../../hooks/MyProjectsContext';
import ProjectsHeader from '../../../components/my projects/ProjectsHeader';
import ProjectStats from '../../../components/my projects/ProjectsStats';
import FilterBar from '../../../components/my projects/FilterBar';
import ProjectGrid from '../../../components/my projects/ProjectGrid';
import Pagination from '../../../components/my projects/Pagination';
import BulkActionBar from '../../../components/my projects/BulkActionBar';
import DeleteProjectModal from '../../../components/my projects/DeleteProjectModal';
import ToastNotification from '../../../components/my projects/ToastNotification';
import { useUser } from '@/hooks/AuthContext';
import api from './../../../lib/api';
// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';

export default function MyProjectsDashboard() {
 
  // const tokenData = await auth?.api?.getToken({
  //   headers: await headers(),
  // });
  // const token = tokenData?.token;

  // let projects = null 
  //   try {
  //     const res = await api.get('/project/my-projects', 
  //       {
  //         headers: {
  //           Authorization: token
  //         }
  //       }
  //     ); 
  //     projects = res?.data?.payload;
  //     console.log(projects)
  //   } catch (error) {
  //     console.log(error)
  //   }

  const {projects} = useUser();

  return (
    <ProjectsProvider>
      <main className="min-h-screen pb-24 antialiased">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
          
          {/* Dashboard Control Title Banner */}
          <ProjectsHeader />

          {/* Core System Telemetry Strips */}
          <ProjectStats />

          {/* Sticky Filtering, View-Toggle, and Selection Bars */}
          <FilterBar />

          {/* Centralized Dynamic Project Layout Deck */}
          <ProjectGrid projects={projects} />

          {/* Contextual Navigational Node Steppers */}
          <Pagination />

          {/* Structural Overlay Action Frames */}
          <BulkActionBar />
          <DeleteProjectModal />
          <ToastNotification />

        </div>
      </main>
    </ProjectsProvider>
  );
}