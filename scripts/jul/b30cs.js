sendButton.addEventListener("click", async () => {
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    if (name === "" || email === "") {
        alert("Please enter your name and email!");
        return;
    }

    if (selectedSeats.length > 0) {
        const seatList = selectedSeats
            .map((seat) => String.fromCharCode(65 + seat.row) + (seat.col + 1))
            .join(", ");

        const webhookUrl =
            "https://discord.com/api/webhooks/1249783588124098624/T-vTEvBmjfVnFjHRn3gaYVhcrKqzKwfug4NDndRufiR9NMNu1Jtwrd6gcskPrFm9nEv2"; // Add your Discord webhook URL here
        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: "New Booking - 30th July",
                        fields: [
                            { name: "Name", value: name },
                            { name: "Email", value: email },
                            { name: "Seats", value: seatList },
                        ],
                        color: 3066993,
                    },
                ],
            }),
        });

        alert(`You have booked ${selectedSeats.length} seats.`);
        selectedSeats = [];
        updateSeats();
        overlay.style.display = "none";
        popup.style.display = "none";
    } else {
        alert("No seats selected!");
    }
});