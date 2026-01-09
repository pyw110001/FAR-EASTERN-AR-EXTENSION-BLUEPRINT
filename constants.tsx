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
    title: '激活沙盤，構築沉浸式體驗',
    subtitle: 'Interactive Blueprint (Completed)',
    description: '透過高精度三維建模與多媒體交互，將物理沙盤數位化。建立基礎的日夜模式切換與多語言導覽系統。',
    details: ['高精度三維建模', '多媒體資訊交互', '日夜光影切換'],
    icon: Box,
    status: 'completed',
    image: 'https://i.ibb.co/KxXvTfdN/IMG-6442.jpg'
  },
  {
    id: 'p2',
    phase: 'PHASE 02',
    title: '注入數據，升級為視覺化決策中心',
    subtitle: 'Data Twin & Visual Decision Center',
    description: '不再是靜止的模型。我們將ESG能耗、安防監控及客流數據即時疊加於物理空間之上，讓看不見的數據「被看見」。',
    details: [
      'ESG與能源視覺化：即時能耗與碳排數據疊加',
      '安全與應急演練：視覺化疏散路徑與設備狀態'
    ],
    icon: Layers,
    status: 'active',
    image: 'https://i.ibb.co/WppFyfdp/Screen-Shot-2026-01-06-203039-119.png'
  },
  {
    id: 'p3',
    phase: 'PHASE 03',
    title: '邁向未來，與智慧空間對話',
    subtitle: 'Conversational Space (AI/LLM)',
    description: '融合大語言模型 (LLM)，讓建築擁有「大腦」。管理者可以透過自然語言與建築對話，獲取前瞻性洞察與模擬預測。',
    details: [
      '基於LLM的AI助理：即時回答「這棟樓上個月能耗是多少？」',
      '即時資訊問答：快速獲取招商賣點、應急SOP'
    ],
    icon: MessageSquare,
    status: 'future',
    image: 'https://i.ibb.co/R49yw2G2/0-2.png'
  }
];

export const TECH_SPECS: TechSpec[] = [
  {
    label: 'Rendering Engine',
    value: 'Unreal Engine 4',
    description: '', 
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