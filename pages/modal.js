import CardModal from '../components/modal/CardModal'

export default function Home() {
  return (
    <>
    <CardModal
      title={"정말로 삭제하시겠습니까?"}
      content={"일정을 삭제하면 다시 복구할 수 없습니다."}
      onConfirm={() => console.log('Delete Confirmed')}
      onCancel={() => console.log('Delete Canceled')}
      buttons={[
        { role: "cancel", onClick: () => console.log("custom test"), toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "취소" },
        { role: "confirm", toClose: false, classes: "bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-400 transition-all duration-200", label: "삭제" }
      ]}
    >
      <div>모달 테스트</div>
    </CardModal>
    </>
  )
}