// data/managers.ts

export interface Manager {
  id: string;
  name: string;
  projectsManaged: number;
  successRate: string;
}

const managers: Manager[] = [
  { id: 'M001', name: 'Alice Johnson', projectsManaged: 5, successRate: '85%' },
  { id: 'M002', name: 'Bob Lee', projectsManaged: 3, successRate: '90%' },
  { id: 'M003', name: 'Carol Davis', projectsManaged: 4, successRate: '80%' },
  { id: 'M004', name: 'David Smith', projectsManaged: 6, successRate: '88%' },
  { id: 'M005', name: 'Eva Green', projectsManaged: 7, successRate: '92%' },
  { id: 'M006', name: 'Frank Miller', projectsManaged: 2, successRate: '75%' },
  { id: 'M007', name: 'Grace Wilson', projectsManaged: 8, successRate: '95%' },
  { id: 'M008', name: 'Hank Adams', projectsManaged: 5, successRate: '82%' },
  { id: 'M009', name: 'Ivy Clark', projectsManaged: 4, successRate: '79%' },
  { id: 'M010', name: 'Jack Taylor', projectsManaged: 6, successRate: '84%' },
];

export default managers;

  