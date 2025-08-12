import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import RouterIcon from '@mui/icons-material/Router';
import DnsIcon from '@mui/icons-material/Dns';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import WebIcon from '@mui/icons-material/Web';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';

const skillCategories = [
  {
    icon: <CloudIcon fontSize="large" />,
    title: 'Containerization & Orchestration',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    icon: <TrackChangesIcon fontSize="large" />,
    title: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix', 'PRTG'],
  },
  {
    icon: <RouterIcon fontSize="large" />,
    title: 'Networking Tools',
    skills: ['Wireshark', 'Cisco Packet Tracer', 'GNS3', 'EVE-NG', 'PnetLab'],
  },
  {
    icon: <DnsIcon fontSize="large" />,
    title: 'Servers & OS',
    skills: ['Ubuntu Server', 'Windows Server'],
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: 'Web & Reverse Proxy',
    skills: ['Nginx', 'Apache HTTP Server'],
  },
  {
    icon: <SettingsIcon fontSize="large" />,
    title: 'DevOps & CI/CD',
    skills: ['GitHub Actions'],
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: 'Backend & Databases',
    skills: ['Firebase', 'SQL', 'Apache Kafka', 'MongoDB'],
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'Website Development',
    skills: ['Node.js', 'ReactJS', 'Express.js'],
  },
];

export default function SkillsSection() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Skills & Tools
      </Typography>
      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ff6600' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {category.icon}
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {category.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                {category.skills.join('  ·  ')}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
