<template>
    <div class="pr-numbers">
        <div class="row">
            <div class="pr-numbers__item">
                <div class="pr-numbers__item__n">{{ numbers[0] }}</div>
                <div class="pr-numbers__item__t">{{ decl(numbers[0], ['человек сидит','человека сидят','человек сидят']) }} в тюрьмах по политическим мотивам</div>
            </div>
            <div class="pr-numbers__item">
                <div class="pr-numbers__item__n">{{ numbers[1] }}</div>
                <div class="pr-numbers__item__t">{{ decl(numbers[1], ['человек преследуется','человека преследуются','человек преследуются']) }} государством за религию</div>
            </div>
            <div class="pr-numbers__item">
                <div class="pr-numbers__item__n">{{ numbers[2] }}</div>
                <div class="pr-numbers__item__t">{{ decl(numbers[2], ['человек преследуется','человека преследуются','человек преследуются']) }} без лишения свободы</div>
            </div>
            <div class="pr-numbers__item">
                <div class="pr-numbers__item__n">{{ numbers[3] }}</div>
                <div class="pr-numbers__item__t">{{ decl(numbers[3], ['вероятная жерта','вероятные жертвы','вероятных жертв']) }}, не вошедших в текущие списки</div>
            </div>
        </div>
        <div class="pr-numbers__disclaimer">По информации <a href="https://memohrc.org/ru/pzk-list" target="_blank">правозащитного центра «Мемориал»</a> на 15.12.2019</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            numbers: [64, 250, 208, 107]
        }
    },
    methods: {
        decl(number, titles) {  
            let cases = [2, 0, 1, 1, 1, 2];  
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
        }
    }
}
</script>