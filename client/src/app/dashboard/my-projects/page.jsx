
import { ProjectsProvider } from '../../../hooks/MyProjectsContext';
import ProjectsHeader from '../../../components/my projects/ProjectsHeader';
import ProjectStats from '../../../components/my projects/ProjectsStats';
import FilterBar from '../../../components/my projects/FilterBar';
import ProjectGrid from '../../../components/my projects/ProjectGrid';
import Pagination from '../../../components/my projects/Pagination';
import BulkActionBar from '../../../components/my projects/BulkActionBar';
import DeleteProjectModal from '../../../components/my projects/DeleteProjectModal';
import ToastNotification from '../../../components/my projects/ToastNotification';

export default function MyProjectsDashboard() {
  return (
    <ProjectsProvider>
      <main className="min-h-screen pb-24 antialiased">
        <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
          
          {/* Dashboard Control Title Banner */}
          <ProjectsHeader />

          {/* Core System Telemetry Strips */}
          <ProjectStats />

          {/* Sticky Filtering, View-Toggle, and Selection Bars */}
          <FilterBar />

          {/* Centralized Dynamic Project Layout Deck */}
          <ProjectGrid />

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