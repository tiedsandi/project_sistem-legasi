import TablesBox from '../../components/tables/TablesBox'

const dummyData = [
  { id: 1, label: 'John Doe', age: 28, job: 'Software Engineer' },
  { id: 2, label: 'Jane Smith', age: 34, job: 'Product Manager' },
  { id: 3, label: 'Alice Johnson', age: 25, job: 'UI/UX Designer' },
  { id: 4, label: 'Bob Brown', age: 40, job: 'DevOps Engineer' },
]

function FormEkonomiKhusus() {}

export default function EkonomiKhusus() {
  return (
    <>
      <TablesBox title="Ekonomi Khusus" columns={['#', 'Label', 'Age', 'job']} data={dummyData} />
    </>
  )
}
