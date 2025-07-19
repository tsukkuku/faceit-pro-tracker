import { useAppSelector, useDocumentTitle } from "@/shared/hooks";
import { SubscribePlayerCard } from "./SubscribePlayerCard";
import style from "./SubscribeList.module.scss";

export const SubscribeList = () => {
  const users = useAppSelector((state) => state.favorite.users);
  useDocumentTitle("Мои подписки");
  return (
    <div className={style.subscribePage}>
      <h1 className={style.pageTitle}>Ваши подписки</h1>
      <div className={style.subscribeSection}>
        {!users.length ? (
          <p>У вас пока еще нету подписок</p>
        ) : (
          <>
            {users.map((player) => (
              <SubscribePlayerCard player={player} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
