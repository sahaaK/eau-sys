// Modal open/close functions (global)
window.openModal = function(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
window.closeModal = function(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
// Schedule row functions (global)
window.addScheduleRow = function() {
    const scheduleRows = document.getElementById('scheduleRows');
    if (!scheduleRows) return;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>
            <select class="w-full px-2 py-1 border-none focus:ring-0">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
            </select>
        </td>
        <td><input type="time" class="w-full px-2 py-1 border-none focus:ring-0" value="09:00"></td>
        <td><input type="time" class="w-full px-2 py-1 border-none focus:ring-0" value="10:30"></td>
        <td class="text-center">
            <button type="button" class="text-red-400 hover:text-red-600 remove-schedule-btn">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    scheduleRows.appendChild(newRow);
    // Attach remove event
    newRow.querySelector('.remove-schedule-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.removeScheduleRow(this);
    });
}
window.removeScheduleRow = function(button) {
    const row = button.closest('tr');
    if (row) row.remove();
}

// Initialization for Classes tab after dynamic load
function initClassesTab() {
    // Modal open/close
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.openModal(this.getAttribute('data-modal-open'));
        });
    });
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.closeModal(this.getAttribute('data-modal-close'));
        });
    });
    // Tab selector buttons
    const tabButtons = document.querySelectorAll('.tab-selector button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active', 'text-primary'));
            this.classList.add('active', 'text-primary');
        });
    });
    // Add schedule row
    const addScheduleBtn = document.querySelector('.add-schedule-btn');
    if (addScheduleBtn) {
        addScheduleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.addScheduleRow();
        });
    }
    // Remove schedule row
    document.querySelectorAll('.remove-schedule-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.removeScheduleRow(this);
        });
    });
    // Add class form submission
    const addClassForm = document.getElementById('addClassForm');
    if (addClassForm) {
        addClassForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Class created successfully!');
            window.closeModal('addClassModal');
        });
    }
    // Animate progress bars (if needed)
    document.querySelectorAll('.progress-fill').forEach(fill => {
        // Already set in style attribute
    });
}
   // Tab functionality
        function openTab(tabName) {
            // Hide all tab content
            const tabContents = document.getElementsByClassName('tab-content');
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
            }

           
            // Remove active class from all tab links
            const tabLinks = document.getElementsByClassName('tab-link');
            for (let i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove('border-primary', 'text-primary');
                tabLinks[i].classList.add('border-transparent', 'text-gray-600');
            }
            
            // Show the current tab and add active class
            document.getElementById(tabName).classList.add('active');
            event.currentTarget.classList.add('border-primary', 'text-primary');
            event.currentTarget.classList.remove('border-transparent', 'text-gray-600');

            if (tabName === 'classes') {
                fetch('classes.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('classes').innerHTML = html;
                        if (typeof initClassesTab === 'function') initClassesTab();
                    });
            }
            if (tabName === 'students') {
                fetch('students.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('students').innerHTML = html;
                    });
            }
            if (tabName === 'semesters') {
                fetch('semesters.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('semesters').innerHTML = html;
                    });
            }
             if (tabName === 'payments') {
                fetch('payments.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('payments').innerHTML = html;
                    });
            }
            if (tabName === 'teachers') {
                fetch('teachers.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('teachers').innerHTML = html;
                    });
            }
             if (tabName === 'semesters') {
                fetch('semesters.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('semesters').innerHTML = html;
                    });
            }
            if (tabName === 'exams') {
                fetch('exams.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('exams').innerHTML = html;
                    });
            }
             if (tabName === 'analytics') {
                fetch('analytics.html')
                    .then(res => res.text())
                    .then(html => {
                        document.getElementById('analytics').innerHTML = html;
                    });
            }
           
            
        }
        
        // Modal functionality
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modals when clicking outside
        window.onclick = function(event) {
            const modals = document.getElementsByClassName('modal');
            for (let i = 0; i < modals.length; i++) {
                if (event.target == modals[i]) {
                    modals[i].style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }
        }


        
         // Sample student data
    const students = [
        {
            id: "#ST-1001",
            firstName: "Ayaan",
            lastName: "Ali",
            email: "ayaan.ali@tusaale.com",
            phone: "+252 61 1234567",
            dob: "1995-03-15",
            joinDate: "2023-01-12",
            level: "intermediate",
            classes: 3,
            status: "active",
            notes: "Ayaan waxa uu si wanaagsan ugu socdaa fasallada heerka dhexe. Waxa uu xooga saaraa hadalka, laakiin waxa uu u baahan yahay in uu xoogga saaro naxwaha.",
            photo: "https://randomuser.me/api/portraits/men/43.jpg"
        },
        {
            id: "#ST-1002",
            firstName: "Hodan",
            lastName: "Mohamed",
            email: "hodan.mohamed@tusaale.com",
            phone: "+252 61 9876543",
            dob: "1992-07-22",
            joinDate: "2022-09-05",
            level: "advanced",
            classes: 2,
            status: "on_leave",
            notes: "Hodan waxay fasax shaqo ku maqan tahay. Waxaa la filayaa inay laba toddobaad gudahood soo laabato.",
            photo: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            id: "#ST-1003",
            firstName: "Abdullahi",
            lastName: "Yusuf",
            email: "abdullahi.yusuf@tusaale.com",
            phone: "+252 61 4567890",
            dob: "1998-11-30",
            joinDate: "2023-03-18",
            level: "beginner",
            classes: 1,
            status: "active",
            notes: "Abdullahi waa arday cusub oo aad u xiiseeya barashada. Waxa uu u baahan yahay taageero dheeraad ah oo ku saabsan dhawaaqa.",
            photo: "https://randomuser.me/api/portraits/men/65.jpg"
        },
        {
            id: "#ST-1004",
            firstName: "Ifrah",
            lastName: "Omar",
            email: "ifrah.omar@tusaale.com",
            phone: "+252 61 7890123",
            dob: "1990-05-08",
            joinDate: "2022-05-15",
            level: "intermediate",
            classes: 3,
            status: "inactive",
            notes: "Ifrah ma aysan soo xaadirin fasallada saddexdii bilood ee la soo dhaafay. Waxaa la isku dayayaa in lala xiriiro si loo xasuusiyo fursadaha dib u diiwaangelinta.",
            photo: "https://randomuser.me/api/portraits/women/75.jpg"
        },
        {
            id: "#ST-1005",
            firstName: "Khalid",
            lastName: "Abdi",
            email: "khalid.abdi@tusaale.com",
            phone: "+252 61 2345678",
            dob: "1996-09-14",
            joinDate: "2023-02-28",
            level: "advanced",
            classes: 2,
            status: "active",
            notes: "Khalid waxa uu aad ugu fiican yahay maaddooyinka heerka sare. Waxaa lagu talinayaa in loo gudbiyo barnaamijka shahaadada khaaska ah.",
            photo: "https://randomuser.me/api/portraits/men/12.jpg"
        }
    ];

    let totalStudents = 1248;
    let currentPage = 1;
    let itemsPerPage = 5;
    let currentSort = { column: 'id', direction: 'asc' };
    let studentToDelete = null;

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
        renderStudentTable();
        setupFilters();
        setupCharts();
        setupFormSubmissions();
    });
    

    // Render the student table
    function renderStudentTable() {
        const tableBody = document.getElementById('studentTableBody');
        tableBody.innerHTML = '';
        
        const filteredStudents = filterAndSortStudents();
        
        filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-pink-50 transition-colors';
            row.innerHTML = `
                <td class="px-4 py-3 font-medium">${student.id}</td>
                <td class="px-4 py-3">
                    <div class="flex items-center">
                        <img src="${student.photo}" alt="Student" class="w-8 h-8 rounded-full mr-3 object-cover student-avatar">
                        <span>${student.firstName} ${student.lastName}</span>
                    </div>
                </td>
                <td class="px-4 py-3 capitalize">${student.level}</td>
                <td class="px-4 py-3">${student.classes}</td>
                <td class="px-4 py-3">
                    <span class="px-3 py-1 rounded-full text-xs status-chip ${getStatusClass(student.status)}">
                        ${formatStatus(student.status)}
                    </span>
                </td>
                <td class="px-4 py-3 text-right">
                    <div class="flex justify-end space-x-2">
                        <button onclick="viewStudent('${student.id}')" class="text-pink-600 hover:text-pink-800 transition-colors">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button onclick="editStudent('${student.id}')" class="text-blue-600 hover:text-blue-800 transition-colors">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="requestDeleteStudent('${student.id}')" class="text-red-600 hover:text-red-800 transition-colors">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        updatePaginationInfo();
    }

    // Filter and sort students based on current settings
    function filterAndSortStudents() {
        // Get filter values
        const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
        const levelFilter = document.getElementById('levelFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        
        // Filter students
        let filtered = students.filter(student => {
            const matchesSearch = 
                student.firstName.toLowerCase().includes(searchTerm) || 
                student.lastName.toLowerCase().includes(searchTerm) || 
                student.id.toLowerCase().includes(searchTerm);
            
            const matchesLevel = levelFilter === 'all' || student.level === levelFilter;
            const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
            
            return matchesSearch && matchesLevel && matchesStatus;
        });
        
        // Sort students
        filtered.sort((a, b) => {
            const column = currentSort.column;
            
            // For numeric fields
            if (column === 'classes') {
                return currentSort.direction === 'asc' ? a.classes - b.classes : b.classes - a.classes;
            }
            
            // For string fields
            let aValue, bValue;
            
            if (column === 'name') {
                aValue = `${a.firstName} ${a.lastName}`.toLowerCase();
                bValue = `${b.firstName} ${b.lastName}`.toLowerCase();
            } else {
                aValue = a[column].toLowerCase();
                bValue = b[column].toLowerCase();
            }
            
            if (aValue < bValue) return currentSort.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
        
        // Pagination would be handled here if we had more data
        return filtered;
    }

    // Update pagination info
    function updatePaginationInfo() {
        document.getElementById('totalStudents').textContent = totalStudents;
        const start = ((currentPage - 1) * itemsPerPage) + 1;
        const end = Math.min(currentPage * itemsPerPage, totalStudents);
        document.getElementById('currentPageItems').textContent = `${start} to ${end}`;
    }

    // Sort the table by column
    function sortTable(column) {
        // Reset all sort icons
        document.querySelectorAll('[id^="sort-"]').forEach(icon => {
            icon.className = 'fas fa-sort ml-1';
        });
        
        // Determine new sort direction
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }
        
        // Update sort icon
        const sortIcon = document.getElementById(`sort-${column}`);
        sortIcon.className = `fas fa-sort-${currentSort.direction === 'asc' ? 'up' : 'down'} ml-1`;
        
        // Re-render table
        renderStudentTable();
    }

    // Filter setup
    function setupFilters() {
        document.getElementById('studentSearch').addEventListener('input', renderStudentTable);
        document.getElementById('levelFilter').addEventListener('change', renderStudentTable);
        document.getElementById('statusFilter').addEventListener('change', renderStudentTable);
        document.getElementById('resetFilters').addEventListener('click', resetFilters);
    }

    // Reset all filters
    function resetFilters() {
        document.getElementById('studentSearch').value = '';
        document.getElementById('levelFilter').value = 'all';
        document.getElementById('statusFilter').value = 'all';
        renderStudentTable();
    }

    // Setup charts
    function setupCharts() {
        // Level Distribution Chart
        const levelCtx = document.getElementById('levelChart').getContext('2d');
        const levelChart = new Chart(levelCtx, {
            type: 'doughnut',
            data: {
                labels: ['Beginner', 'Intermediate', 'Advanced'],
                datasets: [{
                    data: [425, 567, 256],
                    backgroundColor: [
                        'rgba(249, 168, 212, 0.8)',
                        'rgba(216, 180, 254, 0.8)',
                        'rgba(167, 139, 250, 0.8)'
                    ],
                    borderColor: [
                        'rgba(249, 168, 212, 1)',
                        'rgba(216, 180, 254, 1)',
                        'rgba(167, 139, 250, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    // Setup form submissions
    function setupFormSubmissions() {
        document.getElementById('addStudentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, would submit to server here
            alert('Student added successfully!');
            closeModal('addStudentModal');
            // Reset form
            this.reset();
        });
        
        document.getElementById('editStudentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, would submit to server here
            alert('Student details updated successfully!');
            closeModal('editStudentModal');
        });
    }

    // Modal functions
    function openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    // View a student
    function viewStudent(studentId) {
        const student = students.find(s => s.id === studentId);
        if (!student) return;
        
        document.getElementById('viewModalAvatar').src = student.photo;
        document.getElementById('viewModalName').textContent = `${student.firstName} ${student.lastName}`;
        document.getElementById('viewModalId').textContent = student.id;
        document.getElementById('viewModalStatus').textContent = formatStatus(student.status);
        document.getElementById('viewModalStatus').className = `text-sm px-2 py-1 rounded-full ml-2 ${getStatusClass(student.status)}`;
        document.getElementById('viewModalLevel').textContent = capitalizeFirstLetter(student.level);
        document.getElementById('viewModalClasses').textContent = student.classes;
        document.getElementById('viewModalEmail').textContent = student.email;
        document.getElementById('viewModalPhone').textContent = student.phone || 'N/A';
        document.getElementById('viewModalDob').textContent = student.dob ? new Date(student.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
        document.getElementById('viewModalJoinDate').textContent = student.joinDate ? new Date(student.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
        document.getElementById('viewModalNotes').textContent = student.notes || 'No additional notes.';
        
        openModal('viewStudentModal');
    }

    // Edit a student
    function editStudent(studentId) {
        const student = students.find(s => s.id === studentId);
        if (!student) return;
        
        document.getElementById('editModalAvatar').src = student.photo;
        document.getElementById('editModalFirstName').value = student.firstName;
        document.getElementById('editModalLastName').value = student.lastName;
        document.getElementById('editModalEmail').value = student.email;
        document.getElementById('editModalPhone').value = student.phone || '';
        document.getElementById('editModalDob').value = student.dob || '';
        document.getElementById('editModalLevel').value = student.level;
        document.getElementById('editModalStatus').value = student.status;
        document.getElementById('editModalNotes').value = student.notes || '';
        
        openModal('editStudentModal');
    }

    // Request to delete a student
    function requestDeleteStudent(studentId) {
        studentToDelete = studentId;
        openModal('deleteStudentModal');
    }

    // Confirm student deletion
    function confirmDeleteStudent() {
        if (!studentToDelete) return;
        
        // In a real app, would make API call to delete
        alert(`Student ${studentToDelete} has been deleted.`);
        closeModal('deleteStudentModal');
        renderStudentTable();
    }

    // Helper functions
    function formatStatus(status) {
        const statusMap = {
            'active': 'Active',
            'inactive': 'Inactive',
            'on_leave': 'On Leave'
        };
        return statusMap[status] || status;
    }

    function getStatusClass(status) {
        const classMap = {
            'active': 'bg-green-100 text-green-800',
            'inactive': 'bg-red-100 text-red-800',
            'on_leave': 'bg-yellow-100 text-yellow-800'
        };
        return classMap[status] || 'bg-gray-100 text-gray-800';
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
        
        // Initialize dashboard as active tab
        document.getElementById('defaultTab').click();
        
        // Charts
        document.addEventListener('DOMContentLoaded', function() {
            // Enrollment Chart
            const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
            const enrollmentChart = new Chart(enrollmentCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    datasets: [{
                        label: 'New Students',
                        data: [45, 60, 75, 50, 40, 65, 80, 90, 120, 110, 95],
                        borderColor: '#FF69B4',
                        backgroundColor: 'rgba(255, 105, 180, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            
            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(revenueCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Tuition', 'Books', 'Exam Fees', 'Other'],
                    datasets: [{
                        data: [22000, 3500, 2500, 950],
                        backgroundColor: [
                            '#FF69B4',
                            '#FFB6C1',
                            '#FF8FAB',
                            '#FFD1DC'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
            
            // Exam Stats Chart
            const examStatsCtx = document.getElementById('examStatsChart').getContext('2d');
            const examStatsChart = new Chart(examStatsCtx, {
                type: 'bar',
                data: {
                    labels: ['Grammar', 'Listening', 'Speaking', 'Writing', 'Reading'],
                    datasets: [{
                        label: 'Average Score %',
                        data: [82, 75, 88, 79, 85],
                        backgroundColor: [
                            '#FF69B4',
                            '#FF8FAB',
                            '#FF69B4',
                            '#FF8FAB',
                            '#FF69B4'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // Demographics Chart
            const demographicsCtx = document.getElementById('demographicsChart').getContext('2d');
            const demographicsChart = new Chart(demographicsCtx, {
                type: 'polarArea',
                data: {
                    labels: ['18-24', '25-34', '35-44', '45+'],
                    datasets: [{
                        data: [520, 380, 220, 128],
                        backgroundColor: [
                            'rgba(255, 105, 180, 0.7)',
                            'rgba(255, 182, 193, 0.7)',
                            'rgba(255, 105, 180, 0.5)',
                            'rgba(255, 182, 193, 0.5)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
            
            // Enrollment Analytics Chart
            const enrollmentAnalyticsCtx = document.getElementById('enrollmentAnalyticsChart').getContext('2d');
            const enrollmentAnalyticsChart = new Chart(enrollmentAnalyticsCtx, {
                type: 'radar',
                data: {
                    labels: ['Beginner', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced'],
                    datasets: [{
                        label: 'Current',
                        data: [280, 320, 420, 380, 310],
                        backgroundColor: 'rgba(255, 105, 180, 0.2)',
                        borderColor: '#FF69B4',
                        borderWidth: 2,
                        pointBackgroundColor: '#FF69B4'
                    }, {
                        label: 'Previous',
                        data: [240, 280, 380, 350, 290],
                        backgroundColor: 'rgba(255, 182, 193, 0.2)',
                        borderColor: '#FFB6C1',
                        borderWidth: 2,
                        pointBackgroundColor: '#FFB6C1'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            angleLines: {
                                display: false
                            },
                            suggestedMin: 0,
                            suggestedMax: 500
                        }
                    }
                }
            });
            
            // Revenue Trends Chart
            const revenueTrendsCtx = document.getElementById('revenueTrendsChart').getContext('2d');
            const revenueTrendsChart = new Chart(revenueTrendsCtx, {
                type: 'line',
                data: {
                    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [{
                        label: 'Annual Revenue ($)',
                        data: [185600, 210400, 198750, 234200, 278900, 312500],
                        borderColor: '#FF69B4',
                        backgroundColor: 'rgba(255, 105, 180, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                drawBorder: false
                            },
                            ticks: {
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            
            // Create bubbles randomly on page load
            for (let i = 0; i < 8; i++) {
                createBubble();
            }
            
            function createBubble() {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                const size = Math.random() * 300 + 100; // Between 100 and 400px
                const posX = Math.random() * window.innerWidth;
                const posY = Math.random() * window.innerHeight;
                const delay = Math.random() * 5000;
                const duration = Math.random() * 15000 + 10000; // Between 10 and 25s
                const opacity = Math.random() * 0.2 + 0.05; // Between 0.05 and 0.25
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${posX}px`;
                bubble.style.top = `${posY}px`;
                bubble.style.opacity = opacity;
                bubble.style.animationDelay = `${delay}ms`;
                bubble.style.animationDuration = `${duration}ms`;
                
                document.body.appendChild(bubble);
                
                // Remove bubble after animation completes to prevent DOM overload
                setTimeout(() => {
                    bubble.remove();
                    createBubble(); // Create a new bubble to maintain count
                }, duration + delay);
            }
        });


        
        
        // Schedule table functions
        function addScheduleRow() {
            const scheduleRows = document.getElementById('scheduleRows');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>
                    <select class="w-full px-2 py-1 border-none focus:ring-0">
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </td>
                <td><input type="time" class="w-full px-2 py-1 border-none focus:ring-0" value="09:00"></td>
                <td><input type="time" class="w-full px-2 py-1 border-none focus:ring-0" value="10:30"></td>
                <td class="text-center">
                    <button type="button" onclick="removeScheduleRow(this)" class="text-red-400 hover:text-red-600">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            scheduleRows.appendChild(newRow);
        }
        
        function removeScheduleRow(button) {
            const row = button.closest('tr');
            row.remove();
        }
        
        // Form submission
        document.getElementById('addClassForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Class created successfully!');
            closeModal('addClassModal');
        });
        
        // Tab switching
        const tabButtons = document.querySelectorAll('.tab-selector button');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                tabButtons.forEach(btn => btn.classList.remove('active', 'text-primary'));
                this.classList.add('active', 'text-primary');
            });
        });
        
        // Animate progress bars on modal open
        document.addEventListener('DOMContentLoaded', function() {
            const progressFills = document.querySelectorAll('.progress-fill');
            progressFills.forEach(fill => {
                // Already set in the style attribute for demo purposes
            });
        });

       
        
        // Sample data for demonstration
        const semesterData = [
            { id: 1, name: "Fall 2023", period: "Sep 5 - Dec 20", classes: 48, students: 1248, revenue: "$124,800", status: "In Progress" },
            { id: 2, name: "Summer 2023", period: "Jun 5 - Aug 25", classes: 42, students: 1120, revenue: "$112,000", status: "Completed" },
            // Add more semesters as needed
        ];
        
        // Function to toggle semester selection (for bulk actions)
        function toggleSemesterSelection(checkbox) {
            const semesterId = checkbox.dataset.semesterId;
            const row = checkbox.closest('tr');
            
            if (checkbox.checked) {
                row.classList.add('bg-pink-50');
            } else {
                row.classList.remove('bg-pink-50');
            }
        }
        
        // Event listeners for demo purposes
        document.addEventListener('DOMContentLoaded', function() {
            // Highlight current week in calendar
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            // You could add more interactive functionality here
        });

        