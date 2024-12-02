const StudentPage = () => {
  return (
    <div>
      <div>
        Student Page
      </div>
      {/* RIGHT */}
      < div className="w-full xl:w-1/3 flex flex-col gap-8" >
        <EventCalendar />
        <Announcements />
      </div >
    </div >
  );
};

export default StudentPage;