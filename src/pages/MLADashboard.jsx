import React, { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Stack,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";

const sampleComplaints = [
  {
    id: "CMP-101",
    userName: "Rahul Menon",
    title: "Water leakage near house",
    category: "Water",
    ward: "Ward 12",
    status: "Pending",
    urgency: "Urgent",
    date: "2026-05-01",
    details: "Severe leakage affecting nearby homes.",
  },
  {
    id: "CMP-102",
    userName: "Anjali Nair",
    title: "Street light not working",
    category: "Electricity",
    ward: "Ward 8",
    status: "In Progress",
    urgency: "Medium",
    date: "2026-04-28",
    details: "Street light has been off for 5 days.",
  },
  {
    id: "CMP-103",
    userName: "Arun Kumar",
    title: "Garbage not collected",
    category: "Sanitation",
    ward: "Ward 3",
    status: "Resolved",
    urgency: "Normal",
    date: "2026-04-25",
    details: "Bin was cleared after complaint.",
  },
];

export default function MlaComplaintDashboard() {
  const [complaints] = useState(sampleComplaints);
  const [selectedComplaint, setSelectedComplaint] = useState(sampleComplaints[0]);
  const [filters, setFilters] = useState({
    urgency: "",
    category: "",
    ward: "",
    status: "",
  });

  const urgencyScore = (u) => {
    if (u === "Urgent") return 1;
    if (u === "Medium") return 2;
    return 3;
  };

  const filteredComplaints = useMemo(() => {
    return complaints
      .filter((c) => !filters.urgency || c.urgency === filters.urgency)
      .filter((c) => !filters.category || c.category === filters.category)
      .filter((c) => !filters.ward || c.ward === filters.ward)
      .filter((c) => !filters.status || c.status === filters.status)
      .sort((a, b) => urgencyScore(a.urgency) - urgencyScore(b.urgency));
  }, [complaints, filters]);

  const totalComplaints = complaints.length;
  const urgentIssues = complaints.filter((c) => c.urgency === "Urgent").length;
  const pending7Days = complaints.filter((c) => c.status === "Pending").length;
  const resolvedThisWeek = complaints.filter((c) => c.status === "Resolved").length;

  const chipColor = (urgency) => {
    if (urgency === "Urgent") return "error";
    if (urgency === "Medium") return "warning";
    return "success";
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f7fb", p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        MLA Complaint Dashboard
      </Typography>

      {/* Top Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ p: 2 }}>
            <Typography color="text.secondary">Total complaints</Typography>
            <Typography variant="h4" fontWeight={700}>
              {totalComplaints}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ p: 2 }}>
            <Typography color="text.secondary">Urgent issues</Typography>
            <Typography variant="h4" fontWeight={700} color="error.main">
              {urgentIssues}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ p: 2 }}>
            <Typography color="text.secondary">Pending &gt; 7 days</Typography>
            <Typography variant="h4" fontWeight={700} color="warning.main">
              {pending7Days}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card sx={{ p: 2 }}>
            <Typography color="text.secondary">Resolved this week</Typography>
            <Typography variant="h4" fontWeight={700} color="success.main">
              {resolvedThisWeek}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* Left Filters */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, borderRadius: 3, height: "100%" }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Filters
            </Typography>

            <Stack spacing={2}>
              <TextField
                select
                fullWidth
                label="Urgency"
                value={filters.urgency}
                onChange={(e) => setFilters({ ...filters, urgency: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Urgent">Urgent</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                label="Category"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Water">Water</MenuItem>
                <MenuItem value="Electricity">Electricity</MenuItem>
                <MenuItem value="Sanitation">Sanitation</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                label="Ward/Area"
                value={filters.ward}
                onChange={(e) => setFilters({ ...filters, ward: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Ward 12">Ward 12</MenuItem>
                <MenuItem value="Ward 8">Ward 8</MenuItem>
                <MenuItem value="Ward 3">Ward 3</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                label="Status"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Resolved">Resolved</MenuItem>
              </TextField>
            </Stack>
          </Card>
        </Grid>

        {/* Main Table */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Complaints sorted by urgency score
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Complaint</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Urgency</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredComplaints.map((c) => (
                    <TableRow
                      key={c.id}
                      hover
                      selected={selectedComplaint?.id === c.id}
                      onClick={() => setSelectedComplaint(c)}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell>{c.userName}</TableCell>
                      <TableCell>
                        <Typography fontWeight={600}>{c.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {c.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{c.category}</TableCell>
                      <TableCell>
                        <Chip label={c.urgency} size="small" color={chipColor(c.urgency)} variant="outlined" />
                      </TableCell>
                      <TableCell>
                        <Chip label={c.status} size="small" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, borderRadius: 3, height: "100%" }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Selected complaint details
            </Typography>

            {selectedComplaint ? (
              <Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {selectedComplaint.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {selectedComplaint.id}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2" mb={1}>
                  <strong>User:</strong> {selectedComplaint.userName}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Category:</strong> {selectedComplaint.category}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Ward/Area:</strong> {selectedComplaint.ward}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Status:</strong> {selectedComplaint.status}
                </Typography>
                <Typography variant="body2" mb={2}>
                  <strong>Urgency:</strong> {selectedComplaint.urgency}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                  {selectedComplaint.details}
                </Typography>

                <Stack spacing={1}>
                  <Button variant="contained">Mark In Progress</Button>
                  <Button variant="outlined" color="success">
                    Mark Resolved
                  </Button>
                  <Button variant="outlined" color="warning">
                    Forward to Department
                  </Button>
                </Stack>
              </Box>
            ) : (
              <Typography color="text.secondary">
                Select a complaint from the table.
              </Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}