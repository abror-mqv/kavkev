import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Link from '@mui/material/Link';
import insta from "../media/insta.png";
import LanguageSelector from '../components/LanguageSelector'

export const CPhone = () => {

    return (
        
        <MainContainer style={{ maxWidth: "720px" }}>
            <Typography
                component="h5"
                variant="h6"

            >
                Участвующие в розыгрыше на Смартфон
            </Typography>
            <div style={{textAlign: "start"}}>
            59, Джоомартова Айнур<br/>
59, Кушубакова Бактыкан<br/>
59, Джумаза Марина<br/>
59, Orolova Aika<br/>
59, Акматбеков Мирлан<br/>
59, Гриднев Вячеслав Гриднев<br/>
59, чабанов рафаэль<br/>
59, Джидебаева Ширин<br/>
59, Кудайбергенова Айнура<br/>
59, Прокопец Павел Прокопец<br/>
59, Маматжан кызы Аксана<br/>
59, Бадин Александр<br/>
59, Асланов Муслим<br/>
59, Арсланов Кубан<br/>
59, Митренко Евгения<br/>
58, Сыдыкова Тахмина<br/>
58, Арзыматов Султанбек<br/>
58, Джундубаева Муххабат<br/>
58, Tentimish uulu Ernis<br/>
58, Пильгунова Людмила<br/>
58, Молдалиева Сайкал<br/>
58, Жакынова Назгуль<br/>
58, Кадырбердиева Алия<br/>
58, Айдарбеков Канимет<br/>
58, Рыспек уулу Нурбек<br/>
57, Айдаралиева Гульмира<br/>
57, Максатов Бекназар<br/>
57, Шамурзаев Ырысбек<br/>
57, Ашымалиев Нурсултан<br/>
57, Исакулова УБАДАТ<br/>
57, Марселова Нурзат<br/>
57, Мукашев Темиржан<br/>
57, Дроздов Константин<br/>
57, Нурбекова Айгерим<br/>
57, Нурланова Алина<br/>
57, Улукбек уулу Эржигит<br/>
56, Каипов Санжар<br/>
56, Курамаев Каныбек<br/>
56, Сатиева Динара<br/>
56, Вороновский Серега<br/>
56, Баккожоев Иса<br/>
56, TaLAnTbEkOv TiLEk<br/>
56, Турсуниязова Жыпаргул<br/>
56, Кокоев Азамат<br/>
56, Мелисбеков Нурдоолот<br/>
56, Сокучуева Рахат<br/>
56, Томоева Алтынай<br/>
55, Абдрахманов Улукбек<br/>
55, тентиев эрмек<br/>
55, Каратаева Байызкан<br/>
55, Талантбек уулу Нурсултан<br/>
55, Орунбаева Нуриза<br/>
55, Мамбетжанов Нурсултан<br/>
54, Конурбаева Залина<br/>
54, Абыкаева Диана<br/>
54, Мамадразакова Айка<br/>
54, Сейдалиева Тунук<br/>
54, Алымкулов Чынгыз<br/>
54, Эрмамат уулу Барсбек<br/>
54, Бокоев Руслан<br/>
54, Иманалиев Руслан<br/>
54, Руслан кызы Медина<br/>
54, Temirbekova Nargiza<br/>
54, Байсалова Гульвира<br/>
54, Камчибеков Адил<br/>
54, Босумбаев Талантбек<br/>
54, Касымбекова Динара<br/>
54, Сапарали кызы Айдина<br/>
54, Шейшеналиева Назира<br/>
54, Сабатбек кызы Нагима<br/>
54, Жыргалбекова Бурул<br/>
54, Асеева Анна<br/>
54, Абдыжапаров Тимур<br/>
54, Юсузов Азамат<br/>
54, Решетова Юлия<br/>
54, Ким Татьяна<br/>
54, Мураталиев Ислам<br/>
54, Даныбеков Баястан<br/>
53, Sultanalieva Nargiza<br/>
53, Рыскулова Толгонай<br/>
53, Рысалиева Альбина<br/>
53, Молдалиева Диляра<br/>
53, Марасулова Холмомо<br/>
53, Мамарбеков Арген<br/>
53, Найзабекова Жылдыз<br/>
53, Касабаев Тимур<br/>
53, Джумаева Мыскал<br/>
53, Абдыразаков Калысбек<br/>
53, Ногоев Омурбек<br/>
53, Ибрагимов Дамирбек<br/>
53, Эрнисова Назвм<br/>
53, Умурзаков Тилек<br/>
52, Маратовна Ария<br/>
52, Касымбекова Нурзат<br/>
52, Урустомбек кызы Нуржамал<br/>
52, Слободской Михаил<br/>
52, Советов Нурсултан<br/>
52, Булат Мамышев<br/>
52, Макешова Кенжегул Макешова<br/>
52, Бейшеналиев Эмиль<br/>
52, Adieva Gulmira<br/>
52, Кравченко Людмила<br/>
52, Айдарбекова Нуржамал<br/>
52, Радченко Антон<br/>
52, Жазира Бейшебекова<br/>
52, Файзулин Ильгиз<br/>
52, Кудайбердиева Айдана<br/>
52, Молдогазиев Рамазан<br/>
52, Джусупова Чолпон<br/>
51, Бекенова Жылдыз<br/>
51, Рысалиева Гульзина<br/>
51, Сопиев Абдыманап<br/>
51, Жанышбек уулу Бакай<br/>
51, Нургалиев Руслан<br/>
51, Меркибаева Оксана<br/>
51, Толоев Арген<br/>
51, Ашыркулова Дилназ<br/>
51, Артур Аширбаев<br/>
51, Адаканбеков Ринат<br/>
51, Майорова Вика<br/>
51, Юй-ки Владимир<br/>
51, Мамонтов Виктор<br/>
51, Глуховеров Александр<br/>
51, Такырбашова Гульзада<br/>
51, Алгереев Василий<br/>
51, Кемелова Сония<br/>
51, Мурзабаева Гуллаззат<br/>
51, Таштамбаев Тынчтык<br/>
51, Камчибеков Адил<br/>
51, Шевелёв Данил<br/>
51, Антипов Владислав<br/>
51, Асанов Кайрат<br/>
51, Алмазбекова Назира<br/>
51, Салимаматов Даниел<br/>
51, Зарлык кызы Айжамал<br/>
51, Султанмуратов Даниэль<br/>
51, Клевцова Татьяна<br/>
51, Курманалиева Айгүл<br/>
51, Каландарова Лутфия<br/>
51, Бийгазынов Аслан<br/>
51, Akimaliuulu Biyjigit<br/>
51, Асанбаев Чингиз<br/>
51, Шукурбек кызы Рахат<br/>
51, Кубан у Арсен<br/>
51, Жолдошова Айнагуль<br/>
51, Меркибаев Валихан<br/>
51, Кадыров Мурат<br/>
50, Жансеркеева Анара<br/>
50, Махмутов Артур<br/>
50, Мамырбаева Элизат<br/>
50, Алмаматова Кызылгул<br/>
50, Ботобеков Батыр<br/>
50, Асылбеков Ариэт<br/>
50, Кыйыкбаев Эмилбек<br/>
50, Алмазбеков Адилет<br/>
50, Асанкулов Турган<br/>
50, Азаматов Адил<br/>
50, Болотов Нуркал<br/>
50, Жунусбекова Гулмира<br/>
50, Яниковский Рамин<br/>
50, Чакиева Айзада<br/>
50, Багышов Мидин<br/>
50, Валижанова Насиба<br/>
50, Зулпуева Карамат<br/>
50, Сейитказиев Арсен<br/>
50, Токтобаева Томирис<br/>
50, Жантемиров Самат<br/>
50, Кондубаев Тилек<br/>
50, Баабекова Наргиза<br/>
50, Байышбек кызы Ниара<br/>
50, Гулевская Дарья<br/>
50, Хахалин Данил<br/>
50, Жусупова Ри<br/>
50, Торобаев Адиль<br/>
50, Матмусаев Курсанбек<br/>
50, Искендерова Айпери<br/>
50, Осорова Бурул<br/>
50, Мамадияров Нурадил<br/>
50, КАЖЫБЕК КЫЗЫ БАКТЫГУЛ<br/>
50, Ким Маргарита<br/>
50, Зукаева Алина<br/>
50, Суеркуловна Алия<br/>
50, Нурманова Айперим<br/>
50, Чучупалов Александр<br/>
50, Абдыразаков Нурлан<br/>
50, Иманалиева Мира<br/>
50, Садыкова Дана<br/>
50, урманбетова жасмин<br/>
50, Нурлановна Бегимай<br/>
50, Артыкбаев Бекзат<br/>
50, Розиева Парида<br/>
50, Асанбеков Сыймык<br/>
50, Раимкулова Бегимай<br/>
50, Кудабаева Айпери<br/>
50, Абдукаров Дилшат<br/>
50, Амат кызы Бактыгул<br/>
50, Алик уулу Ынтымак<br/>
50, Вагазова Вероника<br/>
50, Талантбек кызы Мадина<br/>
50, Арстаналиева Гулназ<br/>
50, Гончаренко Регина<br/>
50, Bikov John<br/>
50, Кубаныч уулу Эламан<br/>
50, Иманкулова Шахзода<br/>
50, Дзюба Дмитрий<br/>
50, Dzhumadilov Sultan<br/>
50, Нурмаматова Гульзана<br/>
50, Мусин Тимур<br/>
50, Саадакбек кызы Айзада<br/>
50, Бакытбековна Айжамал<br/>
50, Таалайбек кызы Алтынай<br/>
50, Аруунова Сейил<br/>
50, Вербицкая Марина<br/>
50, Болотбекова Элина<br/>
50, Эсеналиева Элзат<br/>
50, Допиро Тамара<br/>
50, Лохи Зарина<br/>
50, Токтобаев Мадыл<br/>
50, Дооранов Аваз<br/>
50, Betenova Amina<br/>
50, Анна Беликова<br/>
50, Бекмуратова Токтайым<br/>
50, Исакова Эльмира<br/>
50, Абдураимова Умутай<br/>
50, Анарбекова Гулиза<br/>
50, Доодбеков Кайрат<br/>
50, Султанбекова Гулзар<br/>
50, Азамат Азамат<br/>
50, Несмеянов Вячеслав<br/>
50, Джасыбаева Айдана<br/>
50, Мурадали уулу Мамарасул<br/>
50, Темирбеков Хамза<br/>
50, Зайнутдинова Олеся<br/>
50, Махмутова Тахмина<br/>
50, Турар уулу Рысбай<br/>
50, Мелисбек кызы Нурмира<br/>
50, Таалайбек кызы Айпери<br/>
50, Лейберов Халмурат<br/>
50, Близнюкова Анжелика<br/>
50, Аскатова Амина<br/>
50, Тезекбаев Барпы<br/>
50, Soodonbekova Akylai<br/>
50, Сыдыков Ислам<br/>
50, Акимбеков Элдияр<br/>
50, Сатыбалдиева Мээрим<br/>
50, Арыкова Бактыгуль<br/>
</div>



        </MainContainer>
    );
};
