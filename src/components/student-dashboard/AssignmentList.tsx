import AssignmentCard from "./AssignmentCard";

export default function AssignmentList({ assignments }: { assignments: any[] }) {
    return (
        <div>
            {assignments.map((a) => (
                <AssignmentCard key={a.id} assignment={a} />
            ))}
        </div>
    );
}
