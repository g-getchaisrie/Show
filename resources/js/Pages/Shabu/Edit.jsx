import React from "react";
import { usePage, Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent } from "../../components/ui/card";

export default function Edit() {
    const { booking, tables } = usePage().props;

    // ตรวจสอบว่าข้อมูล booking และ tables ถูกต้องก่อน
    if (!booking || !tables) {
        return <div>Loading...</div>;
    }

    return (
        <AuthenticatedLayout>
            <Head title={`Edit Booking for Table ${booking.table ? booking.table.id : ''}`} />
            <div className="mt-10 flex justify-center">
                <Card className="p-4 rounded-xl shadow-lg w-full max-w-4xl">
                    <CardContent className="p-3">
                        <h2 className="text-lg font-bold">Edit Booking</h2>
                        <form method="POST" action={`/booking/${booking.id}`}>
                            <input type="hidden" name="_method" value="PUT" />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    defaultValue={booking.first_name || ''}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    defaultValue={booking.last_name || ''}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={booking.email || ''}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue={booking.phone || ''}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Table</label>
                                <select
                                    name="table_id"
                                    defaultValue={booking.table_id || ''}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                >
                                    {tables.map((table) => (
                                        <option key={table.id} value={table.id}>
                                            Table {table.id} - Seats {table.seat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Update
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
