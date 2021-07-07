<template>
  <article>
    <header>
        <h1>Заголовок</h1>
        <dl>
            <dt>Дата Публикации</dt>
            <dd> <time> 21 21 21 </time></dd>

            <dt>Авторы:</dt>
            <dd> <a rel='Автор' href="#">Автор</a> </dd>
        </dl>
    </header>
    <div>
        <p>Контент</p>
    </div>
    
    <footer>
        <dl>
            <dt>Теги:</dt>
            <dd itemprop="Ключевое слово" ><a href="#">Тег1</a></dd>
            <dd itemprop="Ключевое слово" ><a href="#">Тег1</a></dd>
        </dl>
        
        <nav itemprop="Доп. Материалы и ссылки">
            <ul>
                <li><a href="#">Автор</a></li>
                <li><a href="#">Соцсети и прочее</a></li>

            </ul>
        </nav>
    </footer>
  </article>
</template>

<script>
export default {

}
</script>

<style>

</style>