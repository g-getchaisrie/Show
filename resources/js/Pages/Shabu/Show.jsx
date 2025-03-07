import React from "react";
import { usePage, Head, Link, router } from "@inertiajs/react";  // ใช้ Link และ router จาก Inertia
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent } from "../../components/ui/card";

export default function Show() {
    const { booking } = usePage().props;

    // ฟังก์ชันสำหรับการลบการจอง
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this booking?")) {
            router.delete(`/booking/${booking.id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Booking Details for Table ${booking.table.id}`} />
            <div className="mt-10 flex justify-center">
                <Card className="p-4 rounded-xl shadow-lg w-full max-w-4xl">
                    <CardContent className="p-3">
                        <h2 className="text-lg font-bold">Booking Details</h2>
                        <p className="text-sm">Table ID: {booking.table.id}</p>
                        <p className="text-sm">Seats: {booking.table.seat}</p>
                        <p className="text-sm">Reserved By: {booking.first_name} {booking.last_name}</p>
                        <p className="text-sm">Email: {booking.email}</p>
                        <p className="text-sm">Phone: {booking.phone}</p>
                        <p className="text-sm">Reserved At: {new Date(booking.reserved_at).toLocaleString()}</p>
                        <p className="text-sm">Expires At: {new Date(booking.expires_at).toLocaleString()}</p>

                        {/* ปุ่มแก้ไข */}
                        <Link
                            href={`/booking/${booking.id}/edit`}
                            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Edit
                        </Link>

                        {/* ปุ่มลบ */}
                        <button
                            onClick={handleDelete}
                            className="mt-4 ml-2 inline-block bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
