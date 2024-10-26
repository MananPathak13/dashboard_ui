import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import AttandanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
import EventCalendar from "@/components/EventCalendar"
import Announcement from "@/components/Announcement"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFt */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />

                </div>
                {/* MIDDLE CHARTS */}
                <div className=" flex gap-4 flex-col lg:flex-row">
                    {/* COUTN CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]"><AttandanceChart /></div>
                </div>
                {/* BOTTOM  */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>

            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcement />
            </div>
        </div>
    )
}

export default AdminPage
