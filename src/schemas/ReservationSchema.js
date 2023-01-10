import mongoose, {Schema} from "mongoose";

const ReservationSchema = new Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    validTill: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["RESERVED", "CANCELLED", "BORROWED", "EXPIRED"],
        default: "RESERVED"
    }
})

export default mongoose.model("Reservation", ReservationSchema);