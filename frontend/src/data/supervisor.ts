// data/supervisors.ts

export interface Supervisor {
  id: string;
  name: string;
  team: string;
  completedProjects: number;
}

const supervisors: Supervisor[] = [
  { id: 'S001', name: 'James Wilson', team: 'Team A', completedProjects: 15 },
  { id: 'S002', name: 'Lisa Miller', team: 'Team B', completedProjects: 12 },
  { id: 'S003', name: 'Michael Taylor', team: 'Team C', completedProjects: 18 },
  { id: 'S004', name: 'Nina Adams', team: 'Team D', completedProjects: 10 },
  { id: 'S005', name: 'Oliver Harris', team: 'Team E', completedProjects: 14 },
  { id: 'S006', name: 'Paul Lewis', team: 'Team F', completedProjects: 16 },
  { id: 'S007', name: 'Quinn Scott', team: 'Team G', completedProjects: 11 },
  { id: 'S008', name: 'Rachel Young', team: 'Team H', completedProjects: 13 },
  { id: 'S009', name: 'Samuel Allen', team: 'Team I', completedProjects: 17 },
  { id: 'S010', name: 'Tina King', team: 'Team J', completedProjects: 20 },
];

export default supervisors;
