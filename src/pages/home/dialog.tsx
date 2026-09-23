import { dialogAppointment , type DialogProps } from './dialog.condition';
export default function Dialog(props: DialogProps) {

    const {
        shouldRender,
        onCloseModal,
        submitAppointment
    } = dialogAppointment(props)

    if (!shouldRender) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Make an Appointment</h2>
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded-lg active:scale-95 cursor-pointer">Cancel</button>
                    <button onClick={submitAppointment} className="px-4 py-2 bg-orange-500 text-white rounded-lg active:scale-95 cursor-pointer">Submit</button>
                </div>
            </div>
        </div>
    );
}