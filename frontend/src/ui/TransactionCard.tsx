export default function TransactionCard({
    title,
    value,
}:{
    title: string;
    value: string| number;
}) {
    return (
      <div className="bg-indigo-50 rounded-xl p-4 shadow">
        <p className="text-sm text-gray-500"> total {title}</p>
        <p className="text-xl font-bold text-indigo-600">
          {value}
        </p>
      </div>
    );
}