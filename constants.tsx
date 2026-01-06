import { 
  Box, 
  Layers, 
  Cpu, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Users, 
  BarChart3,
  Globe,
  Smartphone,
  Clock
} from 'lucide-react';
import { TimelineItem, TechSpec } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'p1',
    phase: 'PHASE 01',
    title: '激活沙盘，构筑沉浸式体验',
    subtitle: 'Interactive Blueprint (Completed)',
    description: '通过高精度三维建模与多媒体交互，将物理沙盘数字化。建立基础的日夜模式切换与多语言导览系统。',
    details: ['高精度三维建模', '多媒体信息交互', '日夜光影切换'],
    icon: Box,
    status: 'completed',
    image: 'https://i.ibb.co/KxXvTfdN/IMG-6442.jpg'
  },
  {
    id: 'p2',
    phase: 'PHASE 02',
    title: '注入数据，升级为可视化决策中心',
    subtitle: 'Data Twin & Visual Decision Center',
    description: '不再是静止的模型。我们将ESG能耗、安防监控及客流数据实时叠加于物理空间之上，让看不见的数据“被看见”。',
    details: [
      'ESG与能源可视化：实时能耗与碳排数据叠加',
      '安全与应急演练：可视化疏散路径与设备状态',
      '客流高峰导向：模拟并展示最佳流线路径'
    ],
    icon: Layers,
    status: 'active',
    image: 'https://i.ibb.co/WppFyfdp/Screen-Shot-2026-01-06-203039-119.png'
  },
  {
    id: 'p3',
    phase: 'PHASE 03',
    title: '迈向未来，与智慧空间对话',
    subtitle: 'Conversational Space (AI/LLM)',
    description: '融合大语言模型 (LLM)，让建筑拥有“大脑”。管理者可以通过自然语言与建筑对话，获取前瞻性洞察与模拟预测。',
    details: [
      'LLM 空间上下位助理：即时回答“这栋楼上个月能耗是多少？”',
      '即时信息问答：快速获取招商卖点、应急SOP',
      '模拟与预测：进行客流高峰模拟或应急事件推演'
    ],
    icon: MessageSquare,
    status: 'future',
    image: 'https://picsum.photos/801/601?grayscale&blur=2'
  }
];

export const TECH_SPECS: TechSpec[] = [
  {
    label: 'Rendering Engine',
    value: 'Unreal Engine 4',
    description: '', // Removed description as requested
    icon: Globe
  },
  {
    label: 'Hardware Platform',
    value: 'iPad Pro (M2/M4)',
    description: 'LiDAR Scanner Integration',
    icon: Smartphone
  },
  {
    label: 'Latency',
    value: '< 200ms',
    description: 'Real-time Interaction Response',
    icon: Zap
  },
  {
    label: 'Timeline',
    value: '16 Weeks',
    description: 'Concept to Final Delivery',
    icon: Clock
  }
];