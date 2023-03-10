import AddCricketer from "./AddCricketer";
import ListFun from "./ListFile";
export default function CricketerComponent() {
  return (
    <>
      <ListFun
        addcricketer={({
          cric_name,
          cric_run,
          cric_rank,
          onChangeName,
          onChangeRun,
          onChangeRank,
          onClickAdd,
          onClickUpdate,
          addDisabled,
          updateDisabled,
        }) => (
          <AddCricketer
            cric_run={cric_run}
            cric_rank={cric_rank}
            cric_name={cric_name}
            onChangeName={onChangeName}
            onChangeRun={onChangeRun}
            onChangeRank={onChangeRank}
            onClickAdd={onClickAdd}
            onClickUpdate={onClickUpdate}
            addDisabled={addDisabled}
            updateDisabled={updateDisabled}
          />
        )}
      />
    </>
  );
}
