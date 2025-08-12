import React from 'react';
import {Box, Typography, Container, AppBar, Toolbar, Avatar, Grid, Button, Paper} from '@mui/material';
import {Email, GitHub, LinkedIn, Terminal, Cloud, Lan, Insights, Security, Storage, Monitor, DashboardCustomize, Dns} from '@mui/icons-material';
import SkillsSection from './SkillsSection';
import { orange } from '@mui/material/colors';

export default function PortfolioWebsite() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: '#000', boxShadow: 'none', borderBottom: '1px solid #222' }}
      >
        <Toolbar>
          <Avatar
            src="./img/Logo.png"
            alt="Kiet Pham Logo"
            sx={{ width: 130, height: 130, mr: 2 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }} />
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Hello, I'm Kiet Pham
        </Typography>
        <Typography variant="h6" sx={{ color: orange[500] }}>
          Network Engineer | DevOps Enthusiast | IT Support
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          I specialize in computer networking, systems monitoring, and secure infrastructure deployment, and I’m committed to delivering robust and scalable technology solutions.
        </Typography>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <SkillsSection />
      </Container>


      {/* Contact Section */}
      <Container maxWidth="sm" sx={{ mt: 12, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Let's connect and build something amazing together.
        </Typography>

        <Box display="flex" justifyContent="center" gap={4} sx={{ mt: 2 }}>
          <Button
            href="mailto:tuankiet111003@outlook.com.vn"
            startIcon={<Email />}
            variant="outlined"
            color="primary"
          >
            Email
          </Button>
          <Button
            href="https://github.com/KietPham111003"
            startIcon={<GitHub />}
            variant="outlined"
            color="primary"
          >
            GitHub
          </Button>
          <Button
            href="https://linkedin.com/in/kietpham"
            startIcon={<LinkedIn />}
            variant="outlined"
            color="primary"
          >
            LinkedIn
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          mt: 12,
          py: 4,
          textAlign: 'center',
          borderTop: '1px solid #333',
          color: '#888',
        }}
      >
        © 2025 Kiet Pham. All rights reserved.
      </Box>
    </Box>
  );
}
