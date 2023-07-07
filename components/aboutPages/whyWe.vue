<template>
     <div class="grid gap-5 py-4">
          <p class="font-medium indent-4">Есть такая игра <high-light-text aText="SAMP" aLink="https://www.sa-mp.com/"/>. Она обладает кучей возможностей и её схожесть с реальным миром поражает. Так почему бы не воспользоваться этим? Вот это мы и делаем. Всё началось с канала <high-light-text aText="Felliny Prod." aLink="https://www.youtube.com/@FellinyProd"/> Даниил и Серёга делали ролики по GTA SAMP. Канал масштабировался и со временем из набора на съёмки из <high-light-text aText="группы ВК" aLink="https://vk.com/felliny.prod"/> всё перешло в нечто по-настоящему огромное, но об этом позже</p>
          <p class="font-medium indent-4">Суть нашего коллектива создавать ролики по GTA SAMP. На данный момент мы, всё так же, делаем ролики по SAMP, хотя ранее мы делали их и в GTA V. У нас есть огромная команда, в которой есть как старые актёры, информацию о них Вы можете узнать в в разделе <br /><NuxtLink to="actors" class="text-main-accent-color underline">“Основной состав”</NuxtLink>. И наши ряды постоянно пополняются!</p>
          <p class="font-medium indent-4">Мы начинали с набора в группе ВК перед каждыми съёмками. Серёга набирал людей и объяснял всё, а Даниил снимал. Позже всё стало расти выше и выше, появилась группа в Skype, потом сервер Discord, потом стали выдаваться баллы, разные админки. Конечно же стали платить немного денег, сумма росла и так далее.</p>
          <p class="font-medium indent-4">Сейчас мы продолжаем творить всё это и в наши ряды требуются новые люди. Не хочешь попробовать?</p>
     <btnLink btnText="Хочу!" btnLink="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0"/>
     </div>
     
</template>

<script>
import btnLink from '~/components/UIKit/btnLink'
import highLightText from '~/components/UIKit/highLightText'

export default{
     name: 'whyWeAboutPage',
     components: {
          btnLink,
          highLightText
     },
}
</script>