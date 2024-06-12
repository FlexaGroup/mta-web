const seatingPlanContainer = document.querySelector(".seating-plan");
const selectedSeatsElement = document.getElementById("selected-seats");
const confirmButton = document.getElementById("confirm-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const popupSeats = document.getElementById("popup-seats");
const cancelButton = document.getElementById("cancel-button");
const sendButton = document.getElementById("send-button");

let selectedSeats = [];

function generateSeats(rowsData) {
    rowsData.forEach((rowData, rowIndex) => {
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");

        // Add class for specific rows
        if (rowData.row === "A" || rowData.row === "B") {
            rowElement.classList.add(rowData.row);
        }

        const rowLabel = document.createElement("div");
        rowLabel.classList.add("row-label");
        rowLabel.textContent = rowData.row;
        rowElement.appendChild(rowLabel);

        for (let col = 1; col <= rowData.seats; col++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            const seatId = `${rowData.row}${col}`;
            if (rowData.occupiedSeats.includes(seatId)) {
                seat.classList.add("occupied");
            }
            seat.dataset.row = rowIndex;
            seat.dataset.col = col - 1;
            seat.dataset.seat = seatId;
            seat.innerHTML = `<span>${col}</span>`;
            seat.addEventListener("click", () => selectSeat(rowIndex, col - 1));
            rowElement.appendChild(seat);

            // Add black square after the 9th seat for rows M and N
            if ((rowData.row === "M" || rowData.row === "N") && col === 9) {
                const blackSquare = document.createElement("div");
                blackSquare.classList.add("black-square");
                rowElement.appendChild(blackSquare);
            }
        }

        seatingPlanContainer.appendChild(rowElement);
    });
}

function selectSeat(row, col) {
    const seatElement = document.querySelector(
        `.seat[data-row="${row}"][data-col="${col}"]`
    );
    if (seatElement.classList.contains("occupied")) return;

    const seatIndex = selectedSeats.findIndex(
        (seat) => seat.row === row && seat.col === col
    );

    // If the seat is already selected, remove it
    if (seatIndex !== -1) {
        selectedSeats.splice(seatIndex, 1);
    } else {
        // Check if the maximum number of seats has been reached
        if (selectedSeats.length >= 4) {
            alert("You can only select up to 4 seats.");
            return;
        }
        // If not already selected and maximum not reached, add the seat
        selectedSeats.push({ row, col });
    }
    updateSeats();
}

function updateSeats() {
    const seats = document.querySelectorAll(".seat");
    seats.forEach((seat) => {
        const row = parseInt(seat.dataset.row);
        const col = parseInt(seat.dataset.col);
        seat.classList.remove("selected");
        if (
            selectedSeats.find((seat) => seat.row === row && seat.col === col)
        ) {
            seat.classList.add("selected");
        }
    });
    selectedSeatsElement.textContent = `Selected Seats: ${selectedSeats.length}`;
}

confirmButton.addEventListener("click", () => {
    if (selectedSeats.length > 0) {
        popupSeats.textContent = `Selected Seats: ${selectedSeats
            .map((seat) => String.fromCharCode(65 + seat.row) + (seat.col + 1))
            .join(", ")}`;
        overlay.style.display = "block";
        popup.style.display = "block";
    } else {
        alert("No seats selected!");
    }
});

cancelButton.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
});

// Example data: Replace this with your dynamic data
const rowsData = [
    {
        row: "A",
        seats: 15,
        occupiedSeats: [
            // "A1",
            // "A2",
            // "A3",
            // "A4",
            // "A5",
            // "A6",
            // "A7",
            // "A8",
            // "A9",
            // "A10",
            // "A11",
            // "A12",
            // "A13",
            // "A14",
            // "A15",
        ],
    },
    {
        row: "B",
        seats: 15,
        occupiedSeats: [
            // "B1",
            // "B2",
            // "B3",
            // "B4",
            // "B5",
            // "B6",
            // "B7",
            // "B8",
            // "B9",
            // "B10",
            // "B11",
            // "B12",
            // "B13",
            // "B14",
            // "B15",
        ],
    },
    {
        row: "C",
        seats: 20,
        occupiedSeats: [
            // "C1",
            // "C2",
            // "C3",
            // "C4",
            // "C5",
            // "C6",
            // "C7",
            // "C8",
            // "C9",
            // "C10",
            // "C11",
            // "C12",
            // "C13",
            // "C14",
            // "C15",
            // "C16",
            // "C17",
            // "C18",
            // "C19",
            // "C20",
        ],
    },
    {
        row: "D",
        seats: 20,
        occupiedSeats: [
            // "D1",
            // "D2",
            // "D3",
            // "D4",
            // "D5",
            // "D6",
            // "D7",
            // "D8",
            // "D9",
            // "D10",
            // "D11",
            // "D12",
            // "D13",
            // "D14",
            // "D15",
            // "D16",
            // "D17",
            // "D18",
            // "D19",
            // "D20",
        ],
    },
    {
        row: "E",
        seats: 20,
        occupiedSeats: [
            // "E1",
            // "E2",
            // "E3",
            // "E4",
            // "E5",
            // "E6",
            // "E7",
            // "E8",
            // "E9",
            // "E10",
            // "E11",
            // "E12",
            // "E13",
            // "E14",
            // "E15",
            // "E16",
            // "E17",
            // "E18",
            // "E19",
            // "E20",
        ],
    },
    {
        row: "F",
        seats: 20,
        occupiedSeats: [
            // "F1",
            // "F2",
            // "F3",
            // "F4",
            // "F5",
            // "F6",
            // "F7",
            // "F8",
            // "F9",
            // "F10",
            // "F11",
            // "F12",
            // "F13",
            // "F14",
            // "F15",
            // "F16",
            // "F17",
            // "F18",
            // "F19",
            // "F20",
        ],
    },
    {
        row: "G",
        seats: 25,
        occupiedSeats: [
            // "G1",
            // "G2",
            // "G3",
            // "G4",
            // "G5",
            // "G6",
            // "G7",
            // "G8",
            // "G9",
            // "G10",
            // "G11",
            // "G12",
            // "G13",
            // "G14",
            // "G15",
            // "G16",
            // "G17",
            // "G18",
            // "G19",
            // "G20",
            // "G21",
            // "G22",
            // "G23",
            // "G24",
            // "G25",
        ],
    },
    {
        row: "H",
        seats: 25,
        occupiedSeats: [
            // "H1",
            // "H2",
            // "H3",
            // "H4",
            // "H5",
            // "H6",
            // "H7",
            // "H8",
            // "H9",
            // "H10",
            // "H11",
            // "H12",
            // "H13",
            // "H14",
            // "H15",
            // "H16",
            // "H17",
            // "H18",
            // "H19",
            // "H20",
            // "H21",
            // "H22",
            // "H23",
            // "H24",
            // "H25",
        ],
    },
    {
        row: "I",
        seats: 25,
        occupiedSeats: [
            // "I1",
            // "I2",
            // "I3",
            // "I4",
            // "I5",
            // "I6",
            // "I7",
            // "I8",
            // "I9",
            // "I10",
            // "I11",
            // "I12",
            // "I13",
            // "I14",
            // "I15",
            // "I16",
            // "I17",
            // "I18",
            // "I19",
            // "I20",
            // "I21",
            // "I22",
            // "I23",
            // "I24",
            // "I25",
        ],
    },
    {
        row: "J",
        seats: 25,
        occupiedSeats: [
            // "J1",
            // "J2",
            // "J3",
            // "J4",
            // "J5",
            // "J6",
            // "J7",
            // "J8",
            // "J9",
            // "J10",
            // "J11",
            // "J12",
            // "J13",
            // "J14",
            // "J15",
            // "J16",
            // "J17",
            // "J18",
            // "J19",
            // "J20",
            // "J21",
            // "J22",
            // "J23",
            // "J24",
            // "J25",
        ],
    },
    {
        row: "K",
        seats: 25,
        occupiedSeats: [
            // "K1",
            // "K2",
            // "K3",
            // "K4",
            // "K5",
            // "K6",
            // "K7",
            // "K8",
            // "K9",
            // "K10",
            // "K11",
            // "K12",
            // "K13",
            // "K14",
            // "K15",
            // "K16",
            // "K17",
            // "K18",
            // "K19",
            // "K20",
            // "K21",
            // "K22",
            // "K23",
            // "K24",
            // "K25",
        ],
    },
    {
        row: "L",
        seats: 25,
        occupiedSeats: [
            // "L1",
            // "L2",
            // "L3",
            // "L4",
            // "L5",
            // "L6",
            // "L7",
            // "L8",
            // "L9",
            // "L10",
            // "L11",
            // "L12",
            // "L13",
            // "L14",
            // "L15",
            // "L16",
            // "L17",
            // "L18",
            // "L19",
            // "L20",
            // "L21",
            // "L22",
            // "L23",
            // "L24",
            // "L25",
        ],
    },
    {
        row: "M",
        seats: 18,
        occupiedSeats: [
            // "M1",
            // "M2",
            // "M3",
            // "M4",
            // "M5",
            // "M6",
            // "M7",
            // "M8",
            // "M9",
            // "M10",
            // "M11",
            // "M12",
            // "M13",
            // "M14",
            // "M15",
            // "M16",
            // "M17",
            // "M18",
        ],
    },
    {
        row: "N",
        seats: 18,
        occupiedSeats: [
            // "N1",
            // "N2",
            // "N3",
            // "N4",
            // "N5",
            // "N6",
            // "N7",
            // "N8",
            // "N9",
            // "N10",
            // "N11",
            // "N12",
            // "N13",
            // "N14",
            // "N15",
            // "N16",
            // "N17",
            // "N18",
        ],
    },

    // Add more rows as needed
];

generateSeats(rowsData);

// Disable inspect element
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});