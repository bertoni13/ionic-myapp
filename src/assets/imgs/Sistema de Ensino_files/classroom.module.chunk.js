webpackJsonp(["classroom.module"],{

/***/ "../../../../../src/app/modules/classroom/classroom.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"module-content\" [ngBusy]='busy'>\n    <!-- <ng-container *ngIf='moment(viewDate).isBetween(datepickerConfig.min, datepickerConfig.max)'> -->\n    <ng-container >\n        <div class=\"headerMap\">\n            <div class=\"row col-bind\">\n                <div class=\"btn-more\">\n                    <button class=\"btn\" *ngIf=\"auth?.currentUser?.info?.integration_partner === 'google'\" (click)='exportModal.show()'>\n                        Exportar para Google Calendar\n                    </button>\n                    <div #month id='month' *ngIf=\"view === 'month'\">\n                        <button [disabled]='auth?.currentUser?.info?.school_year !== today.getFullYear()' class=\"btn hoje\"\n                            mwlCalendarToday\n                            [(viewDate)]=\"viewDate\"\n                            (viewDateChange)=\"viewDateChange(viewDate)\"\n                            (click)='updateMonth()'>\n                            Hoje\n                        </button>\n                        <div class=\"drop-item-page btn-group\" dropdown>\n                            <span dropdown>\n                                <div dropdownToggle class=\"btn month-dropdown dropdownToggle\">\n                                    {{ monthChoise.label }}\n                                    <span class=\"icon-seta-drop\"></span>\n                                </div>\n                                <ul *dropdownMenu class=\"dropdown-menu page-quantity\">\n                                    <li *ngFor=\"let m of months\">\n                                        <button class=\"dropdown-item\"\n                                            mwlCalendarToday\n                                            [(viewDate)]=\"viewDate\"\n                                            (viewDateChange)=\"viewDateChange(changeViewDate(m))\">\n                                            {{ m.label }}\n                                        </button>\n                                    </li>\n                                </ul>\n                            </span>\n                        </div>\n                    </div>\n                    <div #week id='week' *ngIf=\"view === 'week' && lastDay && firstDay\" [ngStyle]='weekBox'>\n                        <span *ngIf='moment(viewDate).isSameOrBefore(lastDay)' class=\"icon-seta-drop swiper-button-next\"\n                            mwlCalendarNextView\n                            [view]=\"view\"\n                            [(viewDate)]=\"viewDate\"\n                            (viewDateChange)=\"viewDateChange(viewDate)\"\n                            (click)='updateWeekList()' id='btnNextWeek'></span>\n\n                        <span *ngIf='moment(viewDate).isSameOrAfter(firstDay)' class=\"icon-seta-drop swiper-button-prev\"\n                            mwlCalendarPreviousView\n                            [view]=\"view\"\n                            [(viewDate)]=\"viewDate\"\n                            (viewDateChange)=\"viewDateChange(viewDate)\"\n                            (click)='updateWeekList()' id='btnPrevWeek' ></span>\n\n                        <p class=\"message\">Sua agenda da {{ getWeekNumber(viewDate) }}ª semana do ano letivo</p>\n                        <p class=\"week-days\"> {{ getFirstAndLastDayWeek(viewDate) }} </p>\n\n                        <button [disabled]='auth?.currentUser?.info?.school_year !== today.getFullYear()' class=\"btn hoje\"\n                            mwlCalendarToday\n                            [(viewDate)]=\"viewDate\"\n                            (viewDateChange)=\"viewDateChange(viewDate)\"\n                            (click)='updateMonth()'\n                            (click)='updateWeekList()'>\n                            Hoje\n                        </button>\n                        <div class=\"caret-button\" [ngStyle]='caretWeekStyle' (click)='expandWeek()'>\n                            <span class=\"caret\" [ngStyle]='caretStyle'></span>\n                        </div>\n                    </div>\n                    <div class=\"expand-week\" [ngStyle]='expandWeekStyle'>\n                        <div class=\"drop-item-page btn-group\" dropdown>\n                            <span dropdown>\n                                <div dropdownToggle class=\"btn month-dropdown dropdownToggle dropdown-weekend\">\n                                    {{ monthChoise.label }}\n                                    <span class=\"icon-seta-drop\"></span>\n                                </div>\n                                <ul *dropdownMenu class=\"dropdown-menu page-quantity dropdown-menu-weekend\">\n                                    <li *ngFor=\"let m of months\">\n                                        <button class=\"dropdown-item\"\n                                            mwlCalendarToday\n                                            [(viewDate)]=\"viewDate\"\n                                            (viewDateChange)=\"viewDateChange(changeViewDate(m))\"\n                                            (click)='updateWeekList()'>\n                                            {{ m.label }}\n                                        </button>\n                                    </li>\n                                </ul>\n                            </span>\n                        </div>\n\n                        <div class=\"weeks-month-for\">\n                            <ng-container *ngFor='let wD of weekDates'>\n                                <div style=\"cursor: default;\" class=\"weeks-month {{ (wD[0] === getWeekNumber(viewDate)) ? 'chose' : '' }}\">\n                                    <p class=\"message\">{{ wD[0] }}ª semana</p>\n                                    <p class=\"week-days\">{{ wD[1] }}</p>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <div class=\"closePopover\" [ngStyle]='expandClosePopover' (click)='expandWeek()'></div>\n                </div>\n                <div class=\"calendar-page\">\n                    <div class=\"teste\">\n                        <span>Exibir como:</span>\n                        <div class=\"icon-calendar-week\"\n                            (click)=\"view = 'week'\"\n                            [class.active]=\"view === 'week'\">\n                        </div>\n                        <div class=\"icon-calendar-month\"\n                            (click)=\"view = 'month'\"\n                            [class.active]=\"view === 'month'\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"calendar-content\">\n            <div *ngIf=\"!hasMap && auth?.currentUser?.info?.role_id == 7\" >\n                <div class=\"interrogation\">\n                    !\n                </div>\n                <div class=\"text-atencao\">atenção!\n                    <span>Você não aplicou nenhum mapa de conteúdo ao ano letivo da turma.</span>\n                </div>\n            </div>\n            <div *ngIf=\"icsDate !== undefined\" >\n                <div class=\"interrogation\">\n                    !\n                </div>\n                <div class=\"text-atencao\">atenção!\n                    <span>Seu calendário sofreu alterações desde a sua última exportação que foi no dia <strong>{{icsDate}}</strong>. Para manter o Google Calendar atualizado, repita o processo de exportação.</span>\n                </div>\n            </div>\n\n            <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n                <ng-container *ngIf='moment(day.date).isBetween(datepickerConfig.min, datepickerConfig.max)'>\n                    <div class=\"cal-cell-top\" (click)='dayClick(day, calendar)'>\n                        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n                        <span class=\"cal-day-number\">{{ day.date.getDate() }} </span>\n                    </div>\n                    <div *ngIf=\"day.events.length > 0\" class='scroll-calendar' >\n                        <div class=\"container-events\" *ngFor=\"let d of events\">\n                            <span (click)='eventClick(d)' class=\"text-events-calendar\" *ngIf='d.start.getDate() === day.date.getDate()' [ngStyle]=\"{ 'cursor': d.color.cursor,  'background': d.color.fundo, 'color': d.color.text, 'border': d.color.borda }\"  [title]=\"d.title\">\n                            <div *ngIf=\"d.meta.meta == 'work-class'\" class=\"btn-aplicar aula-atividade\" id=\"aula-atividade-event\">A</div>\n                            <div *ngIf=\"d.meta.meta == 'extra'\" class=\"btn-aplicar aula-extra\" id=\"aula-extra-event\">E</div>\n                            <div class=\"btn-aplicar\" [ngStyle]=\"{ 'color': d.color.primary }\" >•</div>\n                                {{ (d.title.length < 15) ? d.title : d.title.substring(0, 12) + '...' }}\n                            </span>\n                        </div>\n                    </div>\n                </ng-container>\n            </ng-template>\n\n            <ng-template #headerTemplate let-days=\"days\">\n                <div class=\"cal-day-headers\">\n                    <div class=\"cal-header\"\n                        *ngFor=\"let day of days\"\n                        [class.cal-past]=\"day.isPast\"\n                        [class.cal-today]=\"day.isToday\"\n                        [class.cal-future]=\"day.isFuture\"\n                        [class.cal-weekend]=\"day.isWeekend\"\n                        [class.cal-drag-over]=\"day.dragOver\"\n                        [ngClass]=\"day.cssClass\">\n                        <ng-container *ngIf='moment(day.date).isBetween(datepickerConfig.min, datepickerConfig.max)'>\n\n                            <div class=\"cal-cell-top\" (click)='dayClick(day, calendar)'>\n                                <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n                                <span>{{ day.date.getDate() }}</span><br>\n                                <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b>\n                            </div>\n                            <div class=\"container-events\" *ngFor=\"let d of events\">\n                                <span (click)='eventClick(d)' class=\"text-events-calendar\" *ngIf='d.start.getDate() === day.date.getDate()'  [title]=\"d.title\">\n                                    <div *ngIf=\"d.type == 'work-class'\" class=\"btn-aplicar aula-atividade\" id=\"aula-atividade-event\">A</div>\n                                    <div *ngIf=\"d.type == 'extra-class'\" class=\"btn-aplicar aula-extra\" id=\"aula-extra-event\">E</div>\n                                    <div class=\"btn-aplicar\" [ngStyle]=\"{ 'color': d.color.primary }\" >•</div>\n                                    {{ (d.title.length < 15) ? d.title : d.title.substring(0, 15) }}\n                                </span>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-template>\n\n            <ng-template #eventTemplate></ng-template>\n\n            <div [ngSwitch]=\"view\">\n                <mwl-calendar-month-view\n                    *ngSwitchCase=\"'month'\"\n                    [viewDate]=\"viewDate\"\n                    [events]=\"events\"\n                    [refresh]=\"refresh\"\n                    [locale]=\"locale\"\n                    (eventTimesChanged)=\"eventTimesChanged($event)\"\n                    [cellTemplate]=\"customCellTemplate\">\n                </mwl-calendar-month-view>\n                <mwl-calendar-week-view\n                    *ngSwitchCase=\"'week'\"\n                    [viewDate]=\"viewDate\"\n                    [events]=\"events\"\n                    [refresh]=\"refresh\"\n                    [locale]=\"locale\"\n                    [eventTemplate]='eventTemplate'\n                    [headerTemplate]='headerTemplate'\n                    (eventTimesChanged)=\"eventTimesChanged($event)\"\n                    (dayHeaderClicked)=\"clickedDate = $event.day.date\">\n                </mwl-calendar-week-view>\n                <!-- <mwl-calendar-day-view\n                    *ngSwitchCase=\"'day'\"\n                    [viewDate]=\"viewDate\"\n                    [events]=\"events\">\n                </mwl-calendar-day-view> -->\n            </div>\n        </div>\n\n        <ul class=\"legends\" >\n            <li [ngStyle]=\"{ 'color': types['class'].primary }\" class='generic-class' ><span>Aula não aplicada</span></li>\n            <li [ngStyle]=\"{ 'color': types['class-applied'].primary }\" class='generic-class' ><span>Aula aplicada</span></li>\n            <li class='extra-class' ><span>Aula extra</span></li>\n            <li class='work-class' ><span>Aula com atividade</span></li>\n        </ul>\n        <ul class=\"legends\" style=\"margin-left:10px;\">\n            <li [ngStyle]=\"{ 'color': types['group-event'].primary }\"  class='generic-class' ><span>Evento da turma</span></li>\n            <li [ngStyle]=\"{ 'color': types['school-event'].primary }\" class='generic-class' ><span>Evento da escola</span></li>\n            <li [ngStyle]=\"{ 'color': types['holiday'].primary }\" class='generic-class' ><span>Feriado</span></li>\n        </ul>\n\n        <div class=\"btnCriarEvento\" *ngIf='canCreate' >\n            <button class=\"btn\" (click)=\"criarEvento(calendar, dp)\">Criar Evento</button>\n        </div>\n    </ng-container>\n</div>\n\n<!-- MODAL Calendar -->\n<div bsModal #calendar=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md\">\n        <div class=\"modal-content\">\n\n            <span class=\"icon-btn-fechar\" (click)='calendar.hide()'></span>\n            <br><br><hr>\n\n            <div class=\"modal-body\">\n                <div class=\"container-calendar\">\n                    <dp-day-calendar *ngIf='datepickerConfig?.displayDate'\n                        [(ngModel)]=\"selectedDate\"\n                        [config]=\"datepickerConfig\"\n                        [displayDate]=\"datepickerConfig.displayDate\"\n                    ></dp-day-calendar>\n                </div>\n                <div class=\"container-hours\">\n                    <span>Horário:</span>\n                    <div class=\"hoursLeft\">\n                        <timepicker [(ngModel)]=\"mytime\" [showMeridian]='false'></timepicker>\n                    </div>\n                    <span class=\"hour-text\">até</span>\n                    <div class=\"hoursRight\">\n                        <timepicker [(ngModel)]=\"myTime2\" [showMeridian]='false'></timepicker>\n                    </div>\n                </div>\n                <div class=\"content-generic\" *ngIf=\"eventTypes.length > 0\" >\n                    <div class=\"header-generic\" dropdown>\n                        <span dropdown>\n                            <div (id)='typeChoise' dropdownToggle class=\"btn dropdownToggle\">\n                                {{ typeChoise?.name }}\n                                <span class=\"icon-seta-drop\"></span>\n                            </div>\n                            <ul *dropdownMenu class=\"dropdown-menu\">\n                                <li *ngFor=\"let e of eventTypes\">\n                                    <a class=\"dropdown-item\" [ngClass]=\"(e.name===typeChoise.name)? 'chose' : '' \" (click)='changeEventType(e)' >\n                                        {{ e?.name }}\n                                    </a>\n                                </li>\n                            </ul>\n                        </span>\n                    </div>\n\n                    <div class=\"header-generic\" *ngIf=\"typeChoise.type == 'aula' && hasMap\" >\n                        <span dropdown>\n                            <div (id)='sequenceChoise' dropdownToggle class=\"btn dropdownToggle\" >\n                                {{ sequenceChoise.title }}\n                                <span class=\"icon-seta-drop\"></span>\n                            </div>\n                            <ul *dropdownMenu class=\"dropdown-menu\">\n                                <li *ngFor=\"let s of sequences\">\n                                    <a class=\"dropdown-item\" [ngClass]=\"(s.title===sequenceChoise.title)? 'chose' : '' \" (click)='changeSequence(s)' >\n                                        {{ s.title }}\n                                    </a>\n                                </li>\n                            </ul>\n                        </span>\n                    </div>\n\n                </div>\n                <div class=\"btns-publish\">\n                <div class=\"btn btn-success\" (click)=\"savePublish(calendar)\">Salvar e publicar aula</div>\n                <div class=\"btn btn-default btn-rascunho\" (click)=\"save(calendar)\">Salvar sem publicar aula</div>\n                </div>\n                <!--<a class=\"close-link pull-right\" (click)='classr.hide()'>Fechar</a> -->\n                <br/><br/>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- MODAL EXPORT CALENDAR -->\n<div bsModal #exportModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md\">\n        <div class=\"modal-content\">\n\n            <span class=\"tit-modal\">Exportar seu calendário para o Google Calendar</span>\n            <span class=\"icon-btn-fechar\" (click)='exportModal.hide()'></span>\n            <br><br><hr>\n\n            <div class=\"modal-body\">\n                <div class=\"container-export\">\n                    <div class=\"export-left\">\n                        <div class=\"titulos\">Estamos exportando</div>\n                        <ul>\n                            <li>Aulas de todas as disciplinas</li>\n                            <li>Feriados locais</li>\n                            <li>Feriados nacionais</li>\n                        </ul>\n                    </div>\n                    <div class=\"export-right\">\n                        <div class=\"titulos\">Como importar?</div>\n                        <div class=\"export-right-content\">\n                            <p>No seu Google Calendar, logo abaixo do calendário, procure o botão <strong>\"Adicionar outras agendas\"</strong> e importe o arquivo .ics. Se precisar de ajuda, <a href=\"https://support.google.com/calendar/answer/37118?hl=pt-BR\" title=\"Importar eventos para Google Agenda\" target=\"_blank\">clique aqui.</a></p>\n                            <img src=\"../../assets/img/google-calendar.png\" width=\"150\" height=\"150\" style=\"margin-left:100px;margin-top:20px;\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n\t\t\t<div class=\"modal-footer\">\n                <button class=\"btn btn-success\" (click)=\"exportFileIcs()\">Download do arquivo ics</button>\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"exportModal.hide()\">Cancelar</button>\n\t\t\t</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/classroom/classroom.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nsection {\n  position: relative;\n  height: 100%; }\n\n.module-content {\n  margin-left: 0;\n  margin-bottom: 80px;\n  margin-top: 142px; }\n\n.headerMap {\n  min-width: 1024px;\n  width: 94%;\n  margin-left: 28px;\n  margin-top: 50px; }\n  .headerMap .row {\n    border-bottom: 1px solid #E6E6E6;\n    min-width: 1024px; }\n  .headerMap .btn-more {\n    float: left;\n    margin-left: 18px;\n    margin-bottom: 18px; }\n    .headerMap .btn-more button {\n      background: #F7F7F7;\n      height: 40px;\n      color: #B5B5B5;\n      border: 1px solid #B5B5B5; }\n      .headerMap .btn-more button:hover {\n        background: #DDDDDD;\n        color: #B6B6B6 !important; }\n      .headerMap .btn-more button:active {\n        color: #fff !important;\n        background: #CCCCCC; }\n    .headerMap .btn-more #month .hoje, .headerMap .btn-more #week .hoje {\n      width: 58px;\n      height: 33px;\n      position: absolute;\n      float: right;\n      border-radius: 20px;\n      color: #00ACEC; }\n      .headerMap .btn-more #month .hoje:active, .headerMap .btn-more #week .hoje:active {\n        color: #FFF !important;\n        background-color: #00ACEC !important; }\n      .headerMap .btn-more #month .hoje:disabled, .headerMap .btn-more #week .hoje:disabled {\n        color: #B5B5B5; }\n    .headerMap .btn-more #month .hoje {\n      top: 236px;\n      margin-left: -5px;\n      left: 50%; }\n    .headerMap .btn-more #week {\n      left: 50%;\n      margin-left: -111px;\n      margin-top: -92px;\n      width: 254px;\n      height: 91px;\n      position: absolute;\n      background-color: #FFF;\n      border: 1px solid #B5B5B5;\n      border-radius: 4px; }\n      .headerMap .btn-more #week .message {\n        float: left;\n        position: absolute;\n        margin-left: 34px;\n        margin-top: 10px;\n        font-size: 10px; }\n      .headerMap .btn-more #week .week-days {\n        float: left;\n        position: absolute;\n        margin-left: 28%;\n        margin-top: 25px;\n        color: #00ACEC;\n        font-size: 18px; }\n      .headerMap .btn-more #week .hoje {\n        height: 25px;\n        margin-top: 50px;\n        margin-left: 39%;\n        padding-top: 2px; }\n      .headerMap .btn-more #week .swiper-button-prev {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        margin-left: 70px;\n        margin-top: -250px;\n        z-index: 2; }\n      .headerMap .btn-more #week .swiper-button-next {\n        -webkit-transform: rotate(268deg);\n                transform: rotate(268deg);\n        margin-right: 70px;\n        margin-top: -150px;\n        z-index: 2; }\n      .headerMap .btn-more #week .caret-button {\n        width: 33px;\n        height: 17px;\n        background-color: #B5B5B5;\n        text-align: center;\n        border-radius: 4px;\n        color: #FFF !important;\n        cursor: pointer;\n        float: left;\n        position: absolute;\n        left: 44.5%;\n        top: 90%; }\n        .headerMap .btn-more #week .caret-button .caret {\n          zoom: 1.5;\n          float: left;\n          position: absolute;\n          margin: 4px -4px; }\n    .headerMap .btn-more .expand-week {\n      display: none;\n      width: 623px;\n      height: 179px;\n      left: 50%;\n      margin-left: -300px;\n      margin-top: -12px;\n      background-color: #FAFAFA;\n      border: 1px solid #B5B5B5;\n      border-radius: 4px;\n      position: absolute;\n      float: left;\n      z-index: 2222; }\n      .headerMap .btn-more .expand-week .drop-item-page {\n        margin-top: 25px;\n        z-index: 1040; }\n        .headerMap .btn-more .expand-week .drop-item-page .month-dropdown {\n          width: 170px;\n          height: 44px;\n          padding: 8px; }\n        .headerMap .btn-more .expand-week .drop-item-page .dropdown-menu {\n          margin-left: -15px; }\n    .headerMap .btn-more .closePopover {\n      display: none;\n      z-index: 1000;\n      width: 100%;\n      height: 100%;\n      position: fixed;\n      top: -5px;\n      opacity: 0.1;\n      margin-left: -121px; }\n    .headerMap .btn-more .weeks-month-for {\n      margin: 80px 25px; }\n      .headerMap .btn-more .weeks-month-for .weeks-month {\n        cursor: pointer;\n        width: 100px;\n        height: 61px;\n        padding: 12px 0px;\n        line-height: 1;\n        text-align: center;\n        color: #B5B5B5;\n        background-color: #FFF;\n        border: 1px solid #E8E8E8;\n        border-radius: 4px;\n        float: left;\n        margin: 7px; }\n        .headerMap .btn-more .weeks-month-for .weeks-month .message {\n          font-size: 10px; }\n        .headerMap .btn-more .weeks-month-for .weeks-month .week-days {\n          font-size: 14px; }\n      .headerMap .btn-more .weeks-month-for .chose {\n        color: #646464;\n        background-color: #FAFAFA;\n        border: 1px solid #00ACEC; }\n\n.modal-body {\n  padding: 30px 0px 100px 0px;\n  margin-top: 0;\n  height: 500px;\n  /** Modal export calendar */ }\n  .modal-body .container-calendar {\n    position: relative;\n    left: 120px;\n    width: 250px;\n    float: left;\n    z-index: 1;\n    margin-bottom: 70px;\n    top: 20px; }\n  .modal-body .container-hours {\n    position: relative;\n    width: 350px;\n    float: right;\n    right: 50px;\n    border-left: 1px solid #E8E8E8;\n    height: 223px;\n    top: 20px; }\n    .modal-body .container-hours span {\n      position: relative;\n      top: 20px;\n      left: 140px;\n      color: #525353;\n      font-weight: normal;\n      font-size: 15px; }\n    .modal-body .container-hours .hour-text {\n      float: left;\n      position: absolute;\n      top: 82px;\n      color: #9A9A9A;\n      font-weight: normal;\n      left: 164px; }\n  .modal-body .container-export {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .modal-body .container-export .titulos {\n      font-size: 22px;\n      border-bottom: 1px solid #00BBFF;\n      width: 100%;\n      margin-bottom: 35px;\n      margin-top: 35px;\n      padding-bottom: 7px;\n      padding-left: 25px; }\n    .modal-body .container-export .export-left {\n      width: 30%; }\n    .modal-body .container-export .export-right {\n      width: 50%; }\n    .modal-body .container-export .export-right-content {\n      border-left: 1px solid #B6B6B6;\n      padding-left: 25px; }\n\n.modal-md {\n  max-width: 817px;\n  min-width: 800px;\n  width: 100%;\n  margin-top: 4%; }\n  .modal-md .modal-content .tit-modal {\n    margin: 20px;\n    font-size: 22px;\n    position: relative;\n    top: 5px;\n    color: #00ACEC; }\n  .modal-md .modal-content .icon-btn-fechar {\n    margin-top: 20px;\n    margin-right: 20px; }\n  .modal-md .btns-publish {\n    width: 100%;\n    position: relative;\n    height: 100px;\n    float: left; }\n    .modal-md .btns-publish .btn-success {\n      width: 214px;\n      height: 40px;\n      font-size: 14px;\n      padding: 10px 12px;\n      margin: 24px;\n      border: 0;\n      float: left;\n      left: 135px;\n      margin-top: 25px;\n      position: relative; }\n    .modal-md .btns-publish .btn-rascunho {\n      float: right;\n      width: 214px;\n      height: 40px;\n      font-size: 14px;\n      padding: 10px 12px;\n      margin: 24px;\n      border: 0;\n      margin-top: 25px;\n      position: relative;\n      right: 120px; }\n      .modal-md .btns-publish .btn-rascunho:hover {\n        border: none !important; }\n\n.calendar-content {\n  margin: 30px 35px 10px 30px; }\n  .calendar-content .interrogation {\n    font-size: 19px;\n    color: #EE6D52;\n    width: 20px;\n    border: 2px solid #EE6D52;\n    border-radius: 50%;\n    line-height: 0.6;\n    text-align: center;\n    padding: 3px;\n    float: left;\n    margin-right: 5px;\n    margin-top: 3px; }\n  .calendar-content .text-atencao {\n    font-size: 19px;\n    color: #EE6D52;\n    text-transform: uppercase;\n    margin-bottom: 25px; }\n    .calendar-content .text-atencao span {\n      font-size: 14px;\n      color: #95989A;\n      text-transform: none; }\n\n/*eventos calendar*/\n.container-events {\n  position: relative;\n  top: 50px; }\n  .container-events .text-events-calendar {\n    margin: 5px;\n    background: #F5F5F5;\n    border: 1px solid #9A9A9A;\n    border-radius: 25px;\n    width: 95%;\n    height: 31px;\n    padding: 5px;\n    font-size: 13px;\n    color: #4C4C4D;\n    white-space: nowrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .container-events .text-events-calendar:hover {\n      background: #52C150;\n      border: 1px solid #52C150;\n      color: #fff; }\n\n.btn-aplicar {\n  float: left;\n  position: relative;\n  font-size: 40px;\n  margin-top: -18px;\n  margin-left: 12px;\n  margin-right: 5px; }\n\n.text-events-calendar:hover > .btn-aplicar {\n  color: #fff; }\n\n.legends {\n  position: relative;\n  left: 80px;\n  font-size: 12px;\n  float: left;\n  padding: 0; }\n  .legends li {\n    margin: 0;\n    padding: 0;\n    line-height: 16px; }\n    .legends li.generic-class {\n      list-style-type: none;\n      list-style-position: outside; }\n      .legends li.generic-class:before {\n        content: \"\\25CF\";\n        font-size: 12px;\n        padding-right: 3.8px; }\n    .legends li.extra-class {\n      list-style-type: none;\n      list-style-position: inside;\n      margin: 0;\n      padding: 0; }\n      .legends li.extra-class:before {\n        content: \"E\";\n        font-size: 8px;\n        color: #ff0000;\n        padding-right: 5px; }\n    .legends li.work-class {\n      list-style-type: none; }\n      .legends li.work-class:before {\n        content: \"A\";\n        font-size: 8px;\n        color: #0000ff;\n        padding-right: 5px; }\n    .legends li span {\n      font-size: 12px;\n      color: #95989A; }\n\n.aplicar {\n  margin-top: -28px; }\n\n.not-aplicar {\n  position: absolute;\n  margin-top: -28px; }\n\n.aula-extra {\n  color: #00ACEC;\n  position: absolute;\n  font-size: 13px;\n  margin-left: 15px;\n  margin-top: -3px; }\n\n#aula-extra-event {\n  margin-top: 2px;\n  margin-left: 1px; }\n\n.aula-atividade {\n  color: #F65177;\n  position: relative;\n  font-size: 13px;\n  margin-left: 15px;\n  margin-top: -3px; }\n\n#aula-atividade-event {\n  margin-top: 2px;\n  margin-left: 1px;\n  margin-right: -8px; }\n\n.btnCriarEvento {\n  float: right;\n  right: 35px;\n  position: relative; }\n  .btnCriarEvento .btn {\n    width: 213px;\n    height: 45px;\n    background: #00ACEC;\n    color: #fff; }\n    .btnCriarEvento .btn:hover {\n      border: 2px solid #0082B2; }\n    .btnCriarEvento .btn:active {\n      background: #0082B2; }\n\n.icon-seta-drop {\n  zoom: 0.1;\n  margin-left: 20px;\n  color: #9A9A9A !important; }\n\n.header-right {\n  float: right;\n  width: 300px; }\n  .header-right span {\n    color: #00ACEC;\n    font-weight: 500; }\n  .header-right .disciplina {\n    font-size: 11px;\n    color: #fff;\n    background: #BFBFBF;\n    text-align: center;\n    max-width: 50px;\n    height: 21px;\n    padding: 1%; }\n\n.hoursRight {\n  position: absolute;\n  top: 54px;\n  left: 203px; }\n\n.content-generic {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  background: #FAFAFA;\n  font-size: 18px;\n  height: 80px;\n  border-bottom: 1px solid #E8E8E8;\n  margin: 0; }\n  .content-generic .header-generic {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    margin: 10px 30px; }\n  .content-generic li a:hover {\n    transition: none;\n    width: 100%;\n    margin-left: 0;\n    font-size: 14px; }\n  .content-generic .dropdownToggle {\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid #FAFAFA !important;\n    color: #00ACEC; }\n    .content-generic .dropdownToggle:hover {\n      border: 1px solid #00ACEC !important; }\n    .content-generic .dropdownToggle:active {\n      background: #E8E8E8;\n      border: 1px solid #FAFAFA !important; }\n\n/** Month Dropdown **/\n.drop-item-page {\n  width: 204px;\n  padding: 0;\n  position: absolute;\n  float: right;\n  left: 50%;\n  margin-left: -80px;\n  top: 170px; }\n  .drop-item-page .month-dropdown {\n    color: #00ACEC;\n    font-size: 20px;\n    padding: 16px;\n    width: 204px;\n    height: 58px;\n    border: 1px solid #B5B5B5;\n    background: #ffffff; }\n    .drop-item-page .month-dropdown .icon-seta-drop {\n      margin-top: 100px;\n      margin-right: 150px;\n      float: right; }\n    .drop-item-page .month-dropdown:focus, .drop-item-page .month-dropdown:active {\n      color: #B5B5B5; }\n    .drop-item-page .month-dropdown:hover {\n      background: #E8E8E8;\n      border: 1px solid #C3C3C3; }\n  .drop-item-page .dropdown-weekend {\n    margin-top: -333px; }\n  .drop-item-page .dropdown-menu-weekend {\n    margin-top: -152px; }\n  .drop-item-page .dropdown-menu {\n    width: 204px; }\n    .drop-item-page .dropdown-menu .dropdown-item {\n      background: #FFF;\n      border: none !important;\n      width: 202px;\n      font-size: 18px; }\n      .drop-item-page .dropdown-menu .dropdown-item:hover {\n        color: #FFF !important;\n        background: #00ACEC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/classroom/classroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_date_formatter_provider__ = __webpack_require__("../../../../../src/app/modules/classroom/custom-date-formatter.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_classroom_modal_component__ = __webpack_require__("../../../../../src/app/modules/classroom/modal/classroom-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_classroom_student_component__ = __webpack_require__("../../../../../src/app/modules/classroom/student/classroom-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classroom_service__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var colors = {
    red: {
        primary: '#AD2121',
        secondary: '#FAE3E3',
        cursor: 'default',
        fundo: '#F5F5F5',
        text: '#4C4C4D',
        borda: '1px solid #9A9A9A'
    },
    blue: {
        primary: '#1E90FF',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#E3BC08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#08E30F',
        secondary: '#BAFDBC'
    },
    orange: {
        primary: '#FF4F0F',
        secondary: '#FDCCBA'
    },
    grey: {
        primary: '#7F7F7F',
        secondary: '#A1A1A1'
    }
};
var eventType = {
    'class': colors.yellow,
    'class-applied': colors.green,
    'class-finished': colors.green,
    'group-event': colors.red,
    'school-event': colors.orange,
    'holiday': colors.blue
};
var ClassroomComponent = (function () {
    function ClassroomComponent(auth, classroomService, http, modalService) {
        var _this = this;
        this.auth = auth;
        this.classroomService = classroomService;
        this.http = http;
        this.modalService = modalService;
        this.mytime = new Date();
        this.myTime2 = new Date();
        this.types = eventType;
        this.eventTypes = [];
        this.sequenceChoise = { id: null, title: null };
        this.sequences = [];
        this.hours = [
            { type: 'Hours', label: '8:00' },
            { type: 'Hours2', label: '9:00' }
        ];
        this.view = 'week';
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.activeDayIsOpen = false;
        this.busy = [];
        this.locale = 'pt';
        this.formatMonth = 'pt';
        this.monthChoise = { id: null, label: null };
        this.months = [];
        this.allMonths = [
            { id: 1, label: 'Janeiro' },
            { id: 2, label: 'Fevereiro' },
            { id: 3, label: 'Março' },
            { id: 4, label: 'Abril' },
            { id: 5, label: 'Maio' },
            { id: 6, label: 'Junho' },
            { id: 7, label: 'Julho' },
            { id: 8, label: 'Agosto' },
            { id: 9, label: 'Setembro' },
            { id: 10, label: 'Outubro' },
            { id: 11, label: 'Novembro' },
            { id: 12, label: 'Dezembro' },
        ];
        this.weekDates = [];
        this.datepickerConfig = {
            locale: 'pt-br',
            displayDate: null,
            min: null,
            max: null
        };
        this.hasMap = true;
        this.canCreate = false;
        this.today = new Date();
        this.moment = __WEBPACK_IMPORTED_MODULE_8_moment__;
        this.loadCalendar = function (date) {
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["i" /* URLSearchParams */]();
            if (!date) {
                date = new Date(_this.auth.currentUser.info.school_year.toString() + "-01-01");
            }
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            if (_this.view === 'week') {
                // PEGA AS DATAS DA SEMANA
                firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
                lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 6));
            }
            params.set('date_start', firstDay.toISOString().slice(0, 10));
            params.set('date_end', lastDay.toISOString().slice(0, 10));
            _this.events = [];
            _this.busy.push(_this.http
                .get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].calendar.index.url(), { search: params })
                .toPromise()
                .then(function (response) {
                var _events = response.json().data;
                var calendar_events = [];
                _events.map(function (e) {
                    var dt_start = e.date.concat(' ', (e.hour_start != null) ? e.hour_start : '00:00:00');
                    var dt_end = e.date.concat(' ', (e.hour_end != null) ? e.hour_end : '23:59:59');
                    calendar_events.push({
                        title: e.title,
                        color: eventType[e.type],
                        start: new Date(dt_start),
                        meta: e
                    });
                });
                _this.events = calendar_events;
            }));
        };
    }
    ClassroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDate = new Date();
        this.canCreate = (this.auth.currentUser.info.role === 'TCHT' || this.auth.currentUser.info.role === 'COOR');
        if (this.canCreate) {
            this.canCreate = !(this.auth.currentUser.info.school_year < this.today.getFullYear());
        }
        this.hoursChoise = this.hours[0];
        this.classroomService.channelClassStatus.subscribe(function () {
            console.info('SUBSCRIBED');
            console.info(_this.selectedDate);
            _this.loadCalendar(new Date(_this.selectedDate));
        });
        // VERIFICA SE EXISTE MAPA ASSOCIADO
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].user.groups.url())
            .toPromise()
            .then(function (response) {
            var _groups = response.json().data;
            var _group_discipline_person_id = _this.auth.currentUser.info.group_discipline_person_id;
            var _selectedGroup = _groups.filter(function (g) { return (_this.auth.currentUser.info.group_discipline_id === g.group_discipline_id); });
            if (_selectedGroup[0].planner_map_id != null) {
                _this.hasMap = true;
                _this.mapId = _selectedGroup[0].planner_map_id;
                // CARREGA MAPA
                _this.busy.push(_this.http
                    .get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].group.planner.show.url(_this.auth.currentUser.info.group_discipline_id))
                    .toPromise()
                    .then(function (response) {
                    // CARREGA AS SEQUENCIAS
                    _this.sequences = response.json().data.sequences;
                    _this.sequenceChoise = _this.sequences[0];
                }));
            }
            else {
                _this.hasMap = false;
            }
        }));
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].calendar.months.url())
            .toPromise()
            .then(function (response) {
            var calendar = response.json().data;
            if (calendar.avaliable_months.length > 0) {
                _this.months = _this.allMonths.filter(function (m) { return this.indexOf(m.id) >= 0; }, calendar.avaliable_months);
                // SELECIONA O MES CORRENTE
                _this.months.map(function (m) {
                    if (_this.viewDate && m.id === _this.viewDate.getMonth() + 1) {
                        _this.monthChoise = m;
                    }
                });
                _this.datepickerConfig.min = __WEBPACK_IMPORTED_MODULE_8_moment__((_this.auth.currentUser.info.school_year_date_start)
                    ? _this.auth.currentUser.info.school_year_date_start : _this.auth.currentUser.info.school_year + '01-01');
                _this.datepickerConfig.max = __WEBPACK_IMPORTED_MODULE_8_moment__((_this.auth.currentUser.info.school_year_date_end)
                    ? _this.auth.currentUser.info.school_year_date_end : _this.auth.currentUser.info.school_year + '12-31');
                // O MES CORRENTE NAO TEM NADA
                if (_this.monthChoise.id == null) {
                    // PEGA O PRIMEIRO MES
                    _this.datepickerConfig.displayDate = __WEBPACK_IMPORTED_MODULE_8_moment__(_this.datepickerConfig.min);
                    _this.datepickerConfig.displayDate.set('date', _this.datepickerConfig.displayDate.date() + 1);
                    _this.selectedDate = _this.datepickerConfig.displayDate;
                    _this.monthChoise = _this.months[0];
                    _this.viewDate = new Date(_this.datepickerConfig.min);
                    _this.viewDate.setDate(_this.viewDate.getDate() + 1);
                }
                else {
                    _this.datepickerConfig.displayDate = __WEBPACK_IMPORTED_MODULE_8_moment__();
                    _this.selectedDate = __WEBPACK_IMPORTED_MODULE_8_moment__();
                }
                var firstDay = new Date(_this.datepickerConfig.min);
                var lastDay = new Date(_this.datepickerConfig.max);
                _this.firstDay = new Date(firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 7));
                _this.lastDay = new Date(lastDay.setDate(lastDay.getDate() - lastDay.getDay() - 7));
            }
            _this.loadCalendar(new Date(_this.selectedDate));
        }));
        // LOAD EVENT TYPES
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].event.types.url())
            .toPromise()
            .then(function (response) {
            _this.eventTypes = response.json().data;
            _this.typeChoise = _this.eventTypes[0];
        }));
        // SHOW ICS LAST DOWNLOAD DATE
        if (this.auth.currentUser.info.integration_partner === 'google' && this.auth.currentUser.info.person.export_ics) {
            this.busy.push(this.http.get(__WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].calendar.showICS.url(this.auth.currentUser.info.person.id))
                .toPromise()
                .then(function (response) {
                var date = response.json().data[response.json().data.length - 1].created_at.split(' ')[0].split('-');
                _this.icsDate = date[2] + "/" + date[1] + "/" + date[0];
            }));
        }
    };
    ClassroomComponent.prototype.viewDateChange = function (date) {
        this.loadCalendar(date);
    };
    ClassroomComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    };
    ClassroomComponent.prototype.eventClick = function (d) {
        if (d.meta.type.indexOf('class') >= 0) {
            // ABRE O MODAL APENAS PARA AULA
            switch (this.auth.currentUser.info.role) {
                case 'COOR':
                case 'TCHT':
                    this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__modal_classroom_modal_component__["a" /* ClassroomModalComponent */], { class: 'modal-md-professor', model: d });
                    break;
                case 'PARN':
                case 'STUD':
                    this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__student_classroom_student_component__["a" /* ClassroomStudentComponent */], { class: 'modal-md-aluno', model: d });
                    break;
            }
        }
    };
    ClassroomComponent.prototype.dayClick = function (objDate, _modal) {
        if (this.canCreate) {
            this.selectedDate = __WEBPACK_IMPORTED_MODULE_8_moment__(objDate.date);
            _modal.show();
        }
    };
    /**
     * Exportar arquivo ics
    */
    ClassroomComponent.prototype.exportFileIcs = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].calendar.exportICS.url() + '&all-disciplines=true';
        this.busy.push(this.http.get(url)
            .toPromise()
            .then(function (response) {
            window.open(response.json().data.url_s3, '_blank');
            _this.auth.currentUser.info.person.export_ics = 0;
        }));
    };
    ClassroomComponent.prototype.openGoogleCalendar = function () {
        window.open('https://calendar.google.com', '_blank');
    };
    ClassroomComponent.prototype.changeViewDate = function (month) {
        this.monthChoise = month;
        this.viewDate = new Date(this.auth.currentUser.info.school_year.toString() + '-' + month.id + '-' + this.viewDate.getDate());
        return this.viewDate;
    };
    ClassroomComponent.prototype.updateMonth = function () {
        var _this = this;
        this.months.map(function (m) {
            if (m.id === _this.viewDate.getMonth() + 1) {
                _this.monthChoise = m;
            }
        });
    };
    ClassroomComponent.prototype.changeEventType = function (type) {
        this.typeChoise = type;
    };
    ClassroomComponent.prototype.changeSequence = function (sequence) {
        this.sequenceChoise = sequence;
    };
    ClassroomComponent.prototype.changeHours = function (hours) {
        this.hoursChoise = hours;
    };
    ClassroomComponent.prototype.criarEvento = function (calendar) {
        calendar.show();
    };
    ClassroomComponent.prototype.getWeekNumber = function (date) {
        return Number(__WEBPACK_IMPORTED_MODULE_8_moment__(date).format('w'));
    };
    ClassroomComponent.prototype.changeWeek = function (week) {
        return new Date(__WEBPACK_IMPORTED_MODULE_8_moment__((week !== 52) ? week + 1 : week, 'w').set('year', (week !== 52) ? this.viewDate.getFullYear() : this.viewDate.getFullYear() + 1).format());
    };
    ClassroomComponent.prototype.getFirstAndLastDayWeek = function (date) {
        var _this = this;
        var firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
        var lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 6));
        this.months.map(function (m) {
            if (m.id === firstDay.getMonth() + 1) {
                _this.monthChoise = m;
            }
        });
        return (((firstDay.getDate() + 1).toString().length === 2) ? firstDay.getDate() : '0' + firstDay.getDate()) + '/' +
            (((firstDay.getMonth() + 1).toString().length === 2) ? firstDay.getMonth() + 1 : '0' + (firstDay.getMonth() + 1)) + ' a ' +
            (((lastDay.getDate() + 1).toString().length === 2) ? lastDay.getDate() : '0' + lastDay.getDate()) + '/' +
            (((lastDay.getMonth() + 1).toString().length === 2) ? lastDay.getMonth() + 1 : '0' + (lastDay.getMonth() + 1));
    };
    ClassroomComponent.prototype.resolveWeekList = function (date) {
        var firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
        var lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 6));
        return (((firstDay.getDate() + 1).toString().length === 2) ? firstDay.getDate() : '0' + firstDay.getDate()) + '/' +
            (((firstDay.getMonth() + 1).toString().length === 2) ? firstDay.getMonth() + 1 : '0' + (firstDay.getMonth() + 1)) + ' a ' +
            (((lastDay.getDate() + 1).toString().length === 2) ? lastDay.getDate() : '0' + lastDay.getDate()) + '/' +
            (((lastDay.getMonth() + 1).toString().length === 2) ? lastDay.getMonth() + 1 : '0' + (lastDay.getMonth() + 1));
    };
    ClassroomComponent.prototype.expandWeek = function () {
        if (this.expandWeekStyle) {
            this.expandWeekStyle = null;
            this.caretWeekStyle = null;
            this.caretStyle = null;
            this.expandClosePopover = null;
            this.weekBox = null;
        }
        else {
            this.expandWeekStyle = {
                display: 'block',
                transition: 'display 3s'
            };
            this.caretWeekStyle = {
                marginTop: '70%'
            };
            this.caretStyle = {
                transform: 'rotate(180deg)',
            };
            this.expandClosePopover = {
                display: 'block'
            };
            this.weekBox = {
                boxShadow: '0px 2px 5px #c1c1c1',
                zIndex: '1002'
            };
            this.updateWeekList();
        }
    };
    ClassroomComponent.prototype.updateWeekList = function () {
        var _this = this;
        this.weekDates = [];
        var year = this.auth.currentUser.info.school_year;
        var month = this.viewDate.getMonth();
        this.months.map(function (m) {
            if (m.id === month + 1) {
                for (var i = 0; i <= new Date(year, month, 0).getDate(); i++) {
                    var dateD = new Date(year, month, i);
                    if (dateD.getDay() === 6) {
                        _this.weekDates.push([_this.getWeekNumber(dateD), _this.resolveWeekList(dateD)]);
                    }
                }
                ;
            }
        });
    };
    ClassroomComponent.prototype.savePublish = function (_modal) {
        this._save(_modal, 1);
    };
    ClassroomComponent.prototype.save = function (_modal) {
        this._save(_modal, 0);
    };
    ClassroomComponent.prototype._save = function (_modal, _publish) {
        var _this = this;
        if (_publish === void 0) { _publish = 0; }
        var _hour_start = __WEBPACK_IMPORTED_MODULE_8_moment__(this.mytime);
        var hour_end = __WEBPACK_IMPORTED_MODULE_8_moment__(this.myTime2);
        var _post = {};
        var _url = __WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].event.index.url();
        _post = {
            'date': this.selectedDate.format('YYYY-MM-DD'),
            'hour_start': _hour_start.format('HH:mm:00'),
            'hour_end': hour_end.format('HH:mm:00')
        };
        if (this.typeChoise.type === 'aula') {
            // CRIA AULA EXTRA
            // ASSOCIA SEQUENCIA ESCOLHIDA
            _post.status = _publish;
            _post.class_special_type_id = 1;
            if (this.hasMap && this.sequenceChoise.id != null) {
                _post.sequence_id = this.sequenceChoise.id;
            }
            _url = __WEBPACK_IMPORTED_MODULE_5__routes_api_routes__["a" /* API_ROUTES */].class.index.url();
        }
        else {
            // CRIA EVENTO
            _post.group_discipline_event_type_id = this.typeChoise.id;
        }
        this.busy.push(this.http
            .post(_url, _post)
            .toPromise()
            .then(function (response) {
            _modal.hide();
            // RECARREGA
            _this.loadCalendar(new Date(_this.selectedDate));
        }));
    };
    return ClassroomComponent;
}());
ClassroomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/modules/classroom/classroom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/classroom/classroom.component.scss")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_angular_calendar__["a" /* CalendarDateFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_3__custom_date_formatter_provider__["a" /* CustomDateFormatter */] }],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__classroom_service__["a" /* ClassroomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__classroom_service__["a" /* ClassroomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_services_http_http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _d || Object])
], ClassroomComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=classroom.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/classroom.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomModule", function() { return ClassroomModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classroom_routes__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classroom_component__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_classroom_modal_component__ = __webpack_require__("../../../../../src/app/modules/classroom/modal/classroom-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_classroom_student_component__ = __webpack_require__("../../../../../src/app/modules/classroom/student/classroom-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classroom_service__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_role_role_guard__ = __webpack_require__("../../../../../src/app/services/role/role.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_tixif_ngx_busy__ = __webpack_require__("../../../../tixif-ngx-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_tixif_ngx_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_tixif_ngx_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_busy_config__ = __webpack_require__("../../../../../src/app/config/busy.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_swiper_wrapper__ = __webpack_require__("../../../../ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_date_picker__ = __webpack_require__("../../../../ng2-date-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular4_drag_drop__ = __webpack_require__("../../../../angular4-drag-drop/angular4-drag-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_scroll_to__ = __webpack_require__("../../../../ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_scroll_to__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SWIPER_CONFIG = {
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    keyboardControl: true
};
var ClassroomModule = (function () {
    function ClassroomModule() {
    }
    return ClassroomModule;
}());
ClassroomModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__classroom_routes__["a" /* MODULE_ROUTES */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_16_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["b" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["e" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["c" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["k" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["l" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["j" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["i" /* SortableModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_tixif_ngx_busy__["BusyModule"].forRoot(__WEBPACK_IMPORTED_MODULE_13__config_busy_config__["a" /* DEFAULT_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_14_ngx_swiper_wrapper__["SwiperModule"].forRoot(SWIPER_CONFIG),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_date_picker__["DpDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_17_angular4_drag_drop__["a" /* DragDropDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_scroll_to__["ScrollToModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__services_role_role_guard__["a" /* RoleGuard */], __WEBPACK_IMPORTED_MODULE_8__classroom_service__["a" /* ClassroomService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__classroom_component__["a" /* ClassroomComponent */], __WEBPACK_IMPORTED_MODULE_6__modal_classroom_modal_component__["a" /* ClassroomModalComponent */], __WEBPACK_IMPORTED_MODULE_7__student_classroom_student_component__["a" /* ClassroomStudentComponent */]]
    })
], ClassroomModule);

//# sourceMappingURL=classroom.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/classroom.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_role_guard__ = __webpack_require__("../../../../../src/app/services/role/role.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classroom_component__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_classroom_modal_component__ = __webpack_require__("../../../../../src/app/modules/classroom/modal/classroom-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_classroom_student_component__ = __webpack_require__("../../../../../src/app/modules/classroom/student/classroom-student.component.ts");






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__classroom_component__["a" /* ClassroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'modal', component: __WEBPACK_IMPORTED_MODULE_4__modal_classroom_modal_component__["a" /* ClassroomModalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__services_role_role_guard__["a" /* RoleGuard */]] },
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_5__student_classroom_student_component__["a" /* ClassroomStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__services_role_role_guard__["a" /* RoleGuard */]] },
];
var MODULE_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(ROUTES);
//# sourceMappingURL=classroom.routes.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/classroom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClassroomService = (function () {
    function ClassroomService() {
        this.channelClassStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // CHANNELS
    ClassroomService.prototype.emitterClassStatus = function () {
        this.channelClassStatus.emit();
    };
    return ClassroomService;
}());
ClassroomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ClassroomService);

//# sourceMappingURL=classroom.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/custom-date-formatter.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomDateFormatter = (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    CustomDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'short'
        }).format(date);
    };
    CustomDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(date);
    };
    return CustomDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_angular_calendar__["a" /* CalendarDateFormatter */]));

//# sourceMappingURL=custom-date-formatter.provider.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/modal/classroom-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='showConfirmPublish' >\n\t<div class=\"confirmation-panel\">\n\t\t<span class=\"icon-check\"></span>\n\t\t<div class=\"confirmation-content\">\n\t\t\t<h2>Aula publicada com sucesso.</h2>\n\t\t\t<p>O conteúdo selecionado para esta aula será exibido para a turma.</p>\n\t\t\t<button class=\"btn btn-white\" (click)=\"confirmOk()\" >OK</button>\n\t\t\t<button class=\"btn btn-white\" (click)=\"undoPublish()\" >Desfazer</button>\n\t\t</div>\n\t</div>\n</div>\n\n<div *ngIf='showConfirmFinish' >\n\t<div class=\"confirmation-panel\">\n\t\t<span class=\"icon-check\"></span>\n\t\t<div class=\"confirmation-content\">\n\t\t\t<h2>Aula encerrada com sucesso.</h2>\n\t\t\t<p>O conteúdo selecionado para esta aula continuará sendo exibido para a turma.</p>\n\t\t\t<button class=\"btn btn-white\" (click)=\"confirmOk()\" >OK</button>\n\t\t\t<button class=\"btn btn-white\" (click)=\"undoClose()\" >Desfazer</button>\n\t\t</div>\n\t</div>\n</div>\n\n<div [ngBusy]='busy' *ngIf='showClass' >\n\t<div class=\"col-header\" *ngIf=\"class\" >\n\t\t<div class=\"col-tit\">{{class.date | date:'fullDate'}}</div>\n\t\t<span class=\"icon-btn-fechar\" (click)='bsModalRef.hide()'></span>\n\t\t<button class=\"btn btn-success\" (click)=\"publishClass()\" *ngIf=\"class.status == 0\" >Publicar aula</button>\n\t\t<button class=\"btn btn-danger\" (click)=\"finishClass()\" *ngIf=\"class.status == 1\" >Encerrar aula</button>\n\t\t<div class=\"container-events\">\n\t\t\t<ng-template *ngIf='hasMap' #tolTemplate>{{class?.class_sequence?.sequence?.title}}</ng-template>\n\t\t\t<span class=\"text-events-calendar\" [tooltip]=\"tolTemplate\" placement=\"bottom\">\n\t\t\t\t<div class=\"btn-aplicar\">•</div>{{class.hour_start | slice:0:5 }} - {{class.hour_end | slice:0:5 }}\n\t\t\t</span>\n\t\t\t<span class=\"status\" *ngIf=\"class.status == 0\" >Aguardando Publicação</span>\n\t\t\t<span class=\"status\" *ngIf=\"class.status == 1\" >Aula Publicada</span>\n\t\t\t<span class=\"status\" *ngIf=\"class.status == 2\" >Aula Encerrada</span>\n\t\t</div>\n\t\t<br><hr>\n\t</div>\n\t<div class=\"module-content\">\n\t\t<div class=\"headerMap\" *ngIf=\"hasMap\">\n\t\t\t<div class=\"row col-bind\">\n\t\t\t\t<div class=\"barra-bio\">\n\t\t\t\t\t<div class=\"barra-aula\">\n\t\t\t\t\t\t<span class=\"icon-planejador\"></span>\n\t\t\t\t\t\t<div class=\"number-aulas\">{{class.class_sequence.sequence.class_number}} <span>aulas</span></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"barra-tipo\">\n\t\t\t\t\t<span>{{class.class_sequence.sequence.title}}</span><br/>\n\t\t\t\t\t<span class=\"create\">Criado por {{ this.class.class_sequence.sequence.author.name }} em \n\t\t\t\t\t{{class.group_discipline.map.created_at | date:'dd/MM/y' }}</span>\n\t\t\t\t\t<span class=\"discipline\">{{class.group_discipline.discipline}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"titulos\" *ngIf='classrs.length'>\n\t\t\tChamada\n\t\t</div>\n\t\t<div class=\"chamada-box\" *ngIf='classrs.length'>\n\t\t\t<div class=\"container-chamada\" *ngIf=\"!hasCallingList\" [ngStyle]=\"{'display': cont, 'opacity': fadeOut }\"></div>\n\t\t\t<button class=\"btn-chamada\" *ngIf=\"!hasCallingList\" [ngStyle]=\"{'display': cont, 'opacity': fadeOut }\" (click)=\"enableCallingList()\">Habilitar Chamada</button>\n\t\t\t<div class=\"carousel-generic\" id=\"scrollCarrosel\">\n\t\t\t\t<div>\n\t\t\t\t\t<div *ngIf=\"classrs.length > 0\" class=\"scroll swiper-container\" id='swiperWrapper' [swiper]=\"config\" [(index)]=\"index\" >\n\t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t<div id='{{ i }}' *ngFor=\"let c of classrs; let i = index\" class=\"swiper-slide popover-generic in popover-bottom bottom\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"resolveStudentNumber(i)\" class=\"count-student\">{{ i + 1 }} de {{ classrs.length }}</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"highlighter-inactive map-highlighter-inactive\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"map-name\" fxLayout=\"column\" fxLayoutAlign=\"center center\">{{ c.title }}</div>\n\t\t\t\t\t\t\t\t<div class=\"toggle\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [checked]=\"!c.presence\" (click)='togglePresence(c.presence_id,c.gd_person_id)' id=\"chk-{{c.id}}\" />\n\t\t\t\t\t\t\t\t\t<span class=\"btn\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"labels\"></div>\n\t\t\t\t\t\t\t\t\t<span class=\"bg\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"map-read-more-icon read-more-icon\" *ngIf=\"!c.readMore\" (click)=\"toogleReadMore(c)\" >...</div>\n\t\t\t\t\t\t\t\t<div class=\"map-read-more-icon-active read-more-icon-active\" *ngIf=\"c.readMore\" (click)=\"toogleReadMore(c)\">...</div>\n\t\t\t\t\t\t\t\t<div class=\"popover-generic popover-read-more\" *ngIf=\"c.readMore\">\n\t\t\t\t\t\t\t\t\t<div class=\"popover-read-more-arrow arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"read-more-detalhes\">\n\t\t\t\t\t\t\t\t\t\t<a scrollTo href=\"#anotacoes\" (click)=\"studentNote(c)\" >Fazer anotação</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"icon-seta-drop swiper-button-prev\"></div>\n\t\t\t\t\t\t<div class=\"icon-seta-drop swiper-button-next\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"titulos\" *ngIf='exams.length'>\n\t\t\tAtividades nesta aula\n\t\t</div>\n\t\t<div class=\"chamada-box\" *ngIf='exams.length'>\n\t\t\t<div class=\"container-status\" *ngFor=\"let exam of exams\">\n\t\t\t\t<div class=\"barra-data\">\n\t\t\t\t\t<span>{{ exam.date_end }}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bio\">\n\t\t\t\t\t<span class=\"discipline\">{{ exam.discipline }}</span>\n\t\t\t\t\t<span class=\"icon-person\" *ngIf='auth?.currentUser?.info?.role_id == 7'></span>\n\t\t\t\t\t<small *ngIf='auth?.currentUser?.info?.role_id == 7'>0 de 23</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"font-prova\">{{ exam.description }}</span>\n\t\t\t\t<div class=\"barra-status\">\n\t\t\t\t\t<span><strong>{{ exam.status }}</strong></span>\n\t\t\t\t\t<a class=\"btn\" *ngIf='exam.is_enable && auth?.currentUser?.info?.role !== (\"STUD\" || \"PARN\")' [routerLink]='[\"/atividades/aplicadas/detalhes\", exam.id]' (click)=\"bsModalRef.hide()\">Ver atividade</a>\n\t\t\t\t\t<a class=\"btn\" *ngIf='exam.is_enable && auth?.currentUser?.info?.role === (\"STUD\" || \"PARN\")' [routerLink]='[\"/atividades/aplicadas/detalhes\", exam.id]' (click)=\"bsModalRef.hide()\">Ver atividade</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"hasMap && class.status == 1 && auth?.currentUser?.info?.role !== ('STUD' || 'PARN')\">\n\t\t\t<div class=\"titulos\" *ngIf=\"class.classes.length\" >\n\t\t\t\tAulas de hoje\n\t\t\t</div>\n\n\t\t\t<div *ngFor=\"let item of class.classes\" class='card' >\n\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-title\" >{{item.name}}</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"titulos\"  *ngIf=\"class.files.length > 0\" >\n\t\t\t\tAnexos para a aula de hoje\n\t\t\t</div>\n\n\t\t\t<div class='card-holder' *ngFor=\"let item of class.files\">\n\t\t\t\t<div class='card' >\n\t\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-title\" >{{item.title}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t<span>Criado por <strong>{{item.owner.name}}</strong> em {{item.created_at | date:'short'}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"titulos\"  *ngIf=\"class.resources.length > 0\" >\n\t\t\t\tRecursos para a aula de hoje\n\t\t\t</div>\n\n\t\t\t<div class='card-holder' *ngFor=\"let item of class.resources\">\n\t\t\t\t<div class='card card-thumb' >\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img [src]=\"item?.repositories?.thumbnail\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-title\" >{{item.name}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t<span>Tipo: <strong>{{item?.content_player?.player}}</strong></span>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"container-drag\" *ngIf=\"hasMap && class.status == 0 \" >\n\t\t\t<div class=\"class-main\">\n\t\t\t\t<div class=\"titulos geral-tit tit-anexo\">\n\t\t\t\t\t<span class=\"icon-anexo\"></span>\n\t\t\t\t\t<div>Anexos da sequência didática</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container-drag-in\">\n\t\t\t\t\t<div class=\"drag\">\n\t\t\t\t\t\t<!-- <div class=\"container-button\">\n\t\t\t\t\t\t\t<div class=\"add-button\">\n\t\t\t\t\t\t\t\t<div class=\"icon-btn-fechar btn\"></div>\n\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t<span>Incluir arquivos</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class='card-holder' *ngFor=\"let item of itensFiles\">\n\t\t\t\t\t\t\t<div class='card' >\n\t\t\t\t\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-title\" >{{item.title}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t\t\t\t<span>Criado por <strong>{{item.owner.name}}</strong> em {{item.created_at | date:'short'}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn-more\" *ngIf=\"pageFiles < (seqFiles.length/2)\">\n\t\t\t\t\t\t<button class=\"btn\" (click)=\"pageFiles = pageFiles+1; itensFiles = itensFiles.concat( paginate( seqFiles, 2, pageFiles)); \" >Mais 2</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"titulos geral-tit tit-recurso\">\n\t\t\t\t\t<span class=\"icon-grid\"></span>\n\t\t\t\t\t<div>Recursos da sequência didática</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container-drag-in\">\n\t\t\t\t\t<div class=\"drag\">\n\t\t\t\t\t\t<div class='card-holder' *ngFor=\"let item of itensResources\">\n\t\t\t\t\t\t\t<div class='card card-thumb' >\n\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"item.repositories.thumbnail\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-title\" >{{item.name}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t\t\t\t<span>Tipo: <strong>{{item?.type?.name}}</strong></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn-more\" *ngIf=\"pageResources < (seqResources.length/2)\">\n\t\t\t\t\t\t<button class=\"btn\" (click)=\"pageResources = pageResources+1; itensResources = itensResources.concat( paginate(seqResources, 2, pageResources)); \" >Mais 2</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div> <!-- items -->\n<!-- \t\t\t<div class=\"class-assets\">\n\n\t\t\t\t<div class=\"container-drop\">\n\t\t\t\t\t<div\n\t\t\t\t\tdropDirective\n\t\t\t\t\t(dropEvent)=\"addDropItem($event)\"\n\t\t\t\t\tclass='sortable-wrapper'\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class='sortable-item-empty' [hidden]=\"itensAssets.length\" >Monte sua aula arrastando os ítens desejados para cá.</div>\n\t\t\t\t\t\t<div *ngFor=\"let item of itensAssets\" class='card card-type-{{item.ctype}}' [dragDirective]='item'  >\n\t\t\t\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-title\" >{{item.name}}{{item.title}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button class=\"btn publicar\" (click)=\"publishClass()\">Publicar aula</button>\n\n\t\t\t</div> --><!-- assets -->\n\n\t\t</div>\n\t\t<div id=\"module-tabs-classroom\" >\n\t\t\t<div class=\"titulos\" *ngIf=\"hasMap\" >\n\t\t\t\tSobre a aula\n\t\t\t</div>\n\t\t\t<div class=\"tab-section\" *ngIf=\"hasMap\" >\n\t\t\t\t<ul class='tab-menu'>\n\t\t\t\t\t<li class='tab-link' [ngClass]=\"{'tab-active': (selectedItem==seqItem.type.id)}\" *ngFor=\"let seqItem of class.class_sequence.sequence.item\" >\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"selectedItem = seqItem.type.id\" > {{seqItem.type.item}} </a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<div *ngFor=\"let seqItem of class.class_sequence.sequence.item\" >\n\t\t\t\t\t<div class='tab-content' *ngIf=\"selectedItem == seqItem.type.id\" [innerHtml]=\"seqItem.description\"> ></div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"titulos\" id=\"anotacoes\">\n\t\t\t\tAnotações\n\t\t\t</div>\n\t\t\t<div class=\"container-anotacao\">\n\t\t\t\t<div *ngIf='!newAnotation' class=\"add-button\" >\n\t\t\t\t\t<div class=\"icon-btn-fechar btn\" (click)='addAnotation()'></div>\n\t\t\t\t\t<br><br>\n\t\t\t\t\t<span>Criar nova anotação</span>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf='!newAnotation' class=\"map-content-popover content-popover\">\n\t\t\t\t\t<div (id)='m.id' *ngFor=\"let m of annotations\" class=\"popover-generic in popover-bottom bottom cont-anotation\">\n\t\t\t\t\t\t<span *ngIf=\"m.pinned\" class=\"icon-favorite\"></span>\n\t\t\t\t\t\t<div class=\"map-name\">{{ m.title }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<small>{{m.created_at | date: 'short'}}</small>\n\t\t\t\t\t\t<div class=\"descripition\">\n\t\t\t\t\t\t\t{{m.description}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span *ngIf=\"m?.author_id == auth?.currentUser?.info?.person_id\"  >\n\t\t\t\t\t\t\t<div class=\"map-read-more-icon read-more-icon\" *ngIf=\"!m.readMore\" (click)=\"toogleReadMore(m)\">...</div>\n\t\t\t\t\t\t\t<div class=\"map-read-more-icon-active read-more-icon-active\" *ngIf=\"m.readMore\" (click)=\"toogleReadMore(m)\">...</div>\n\t\t\t\t\t\t\t<div class=\"popover-generic popover-read-more\" *ngIf=\"m.readMore\" >\n\t\t\t\t\t\t\t\t<div class=\"popover-read-more-arrow arrow\"></div>\n\t\t\t\t\t\t\t\t<div class=\"read-more-detalhes\">\n\t\t\t\t\t\t\t\t\t<div (click)=\"editNote(m)\" >Editar</div>\n\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t<div (click)=\"togglepinNote(m.id)\" >\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"m.pinned\" >Desafixar do topo</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!m.pinned\" >Fixar no topo</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--hr/>\n\t\t\t\t\t\t\t\t\t<div>Compartilhar</div-->\n\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t<div (click)=\"deleteNote(m.id)\" >Excluir</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"new-anotation\" *ngIf='newAnotation'>\n\n\t\t\t\t\t<form [formGroup]=\"annotationForm\" (ngSubmit)=\"saveAnnotation()\" >\n\t\t\t\t\t\t<p>Título da anotação</p>\n\t\t\t\t\t\t<input formControlName=\"titleNewAnnotation\" class=\"form-control\" placeholder=\"Digite aqui\" maxlength=\"40\">\n\n\t\t\t\t\t\t<br><p>Essa anotação é sobre algum aluno específico?</p>\n\t\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t\t<input id=\"radio-1\" type=\"radio\" formControlName=\"radioNewAnotation\" [value]='true' >\n\t\t\t\t\t\t\t<label for=\"radio-1\" class=\"radio-label\">Sim</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t\t<input id=\"radio-2\" type=\"radio\" formControlName=\"radioNewAnotation\" [value]='false' >\n\t\t\t\t\t\t\t<label for=\"radio-2\" class=\"radio-label\">Não</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<tag-input *ngIf='annotationForm.value.radioNewAnotation' [placeholder]=\"'+ outro nome'\" [secondaryPlaceholder]=\"'Insira o nome do aluno...'\" [onlyFromAutocomplete]=\"true\" formControlName=\"studentsNewAnotation\" >\n\t\t\t\t\t\t\t<tag-input-dropdown [autocompleteItems]=\"studentsDrop\" ></tag-input-dropdown>\n\t\t\t\t\t\t</tag-input>\n\n\t\t\t\t\t\t<br><br><p>Compartilhado com:</p>\n\t\t\t\t\t\t<div formArrayName=\"rolesNewAnnotation\" >\n\t\t\t\t\t\t\t<div class=\"check-inline\" *ngFor=\"let role of rolesNewAnnotation.controls; let i=index\" [formGroupName]=\"i\" >\n\t\t\t\t\t\t\t\t<input id=\"check-{{role.controls.id.value}}\" type=\"checkbox\" formControlName=\"checked\" >\n\t\t\t\t\t\t\t\t<label for=\"check-{{role.controls.id.value}}\" class=\"radio-label\">{{role.controls.name.value}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<br><br><p>Descreva:</p>\n\t\t\t\t\t\t<textarea formControlName=\"textNewAnnotation\" maxlength=\"250\"></textarea>\n\n\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\" *ngIf='annotationForm.value.idNote == \"\"' [disabled]=\"annotationForm.status == 'INVALID'\" >Salvar</button> &nbsp;\n\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\" *ngIf='annotationForm.value.idNote != \"\"' [disabled]=\"annotationForm.status == 'INVALID'\" >Editar</button> &nbsp;\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"newAnotation = null\" >Voltar</button>\n\n\t\t\t\t\t\t<br><br>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p style=\"display: none;\">{{ (model) ? model.meta.id : 'NOOP' }}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/classroom/modal/classroom-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.col-header {\n  padding: 5px;\n  margin-top: 25px; }\n  .col-header .col-tit {\n    font-size: 22px;\n    font-weight: 400;\n    margin-left: 40px; }\n  .col-header .container-events {\n    top: 0;\n    left: 40px;\n    position: relative; }\n    .col-header .container-events .text-events-calendar {\n      max-width: 150px;\n      float: left;\n      margin: 5px;\n      background: #F5F5F5;\n      border: 1px solid #9A9A9A;\n      border-radius: 25px;\n      width: 95%;\n      height: 31px;\n      padding: 5px;\n      font-size: 13px;\n      color: #4C4C4D;\n      white-space: nowrap;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .col-header .container-events .text-events-calendar:hover {\n        background: #52C150;\n        border: 1px solid #52C150;\n        color: #fff; }\n      .col-header .container-events .text-events-calendar .btn-aplicar {\n        color: #52C150;\n        float: left;\n        position: relative;\n        font-size: 40px;\n        margin-top: -18px;\n        margin-left: 12px;\n        margin-right: 5px; }\n    .col-header .container-events .status {\n      float: left;\n      color: #95989A;\n      font-size: 14px;\n      top: 10px;\n      position: relative;\n      left: 5px; }\n  .col-header .icon-btn-fechar {\n    margin-top: -70px;\n    padding: 5px !important;\n    margin-right: 20px; }\n  .col-header .btn {\n    width: 132px;\n    height: 39px;\n    color: #fff;\n    float: right;\n    font-size: 14px;\n    margin-right: 85px;\n    margin-top: -25px; }\n    .col-header .btn:hover {\n      border: 2px solid #43AF41; }\n    .col-header .btn:active {\n      background: #43AF41; }\n  .col-header hr {\n    margin-top: 35px; }\n  .col-header .container-events .text-events-calendar:hover > .btn-aplicar {\n    color: #fff; }\n\n.add-button {\n  margin-right: 28px; }\n  .add-button .icon-btn-fechar {\n    color: #fff !important;\n    float: none !important;\n    /* padding-top: 34% !important; */\n    zoom: inherit !important;\n    margin-bottom: 20px;\n    /* transform: rotate(0); */\n    padding: 0 !important;\n    line-height: 126px; }\n\n.module-content {\n  padding: 30px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-left: 0; }\n  .module-content .headerMap .col-bind .barra-bio {\n    width: 135px;\n    background: #00ACEC;\n    border-radius: initial;\n    border-top-left-radius: 5px; }\n    .module-content .headerMap .col-bind .barra-bio .barra-aula .number-aulas span {\n      font-size: 16px;\n      font-weight: normal; }\n  .module-content .headerMap .col-bind .barra-tipo {\n    width: auto;\n    min-width: 518px;\n    background: #00BBFF;\n    border-radius: initial;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    line-height: 1.2; }\n    .module-content .headerMap .col-bind .barra-tipo span {\n      position: initial;\n      padding: 5px 10px;\n      display: block; }\n    .module-content .headerMap .col-bind .barra-tipo .create {\n      font-size: 14px;\n      position: absolute;\n      bottom: 10px;\n      left: 10px;\n      margin: 0;\n      padding: 0;\n      display: block;\n      top: auto; }\n    .module-content .headerMap .col-bind .barra-tipo .discipline {\n      background: #fff;\n      color: #00BBFF;\n      font-size: 11px;\n      padding: 3px;\n      right: 10px;\n      top: 34px;\n      left: auto;\n      text-transform: uppercase;\n      position: absolute; }\n  .module-content .titulos {\n    font-size: 22px;\n    border-bottom: 1px solid #00BBFF;\n    width: 100%;\n    margin-top: 35px;\n    padding-bottom: 7px;\n    padding-left: 25px; }\n  .module-content .chamada-box {\n    position: relative; }\n  .module-content .carousel-generic {\n    height: 260px;\n    border: none; }\n    .module-content .carousel-generic div .swiper-container {\n      height: 245px; }\n      .module-content .carousel-generic div .swiper-container .icon-seta-drop {\n        top: 200px; }\n  .module-content .swiper-wrapper .count-student {\n    float: left;\n    margin-top: -25px;\n    margin-left: 43%;\n    color: #B3B6B9;\n    font-size: 18px;\n    font-weight: 100; }\n  .module-content .swiper-slide-active {\n    border: 1px solid #95989A;\n    min-width: 328px !important;\n    max-height: 134px !important;\n    top: 13px !important; }\n    .module-content .swiper-slide-active div .map-highlighter-inactive {\n      background: #00BBFF;\n      left: 20px;\n      top: 35px;\n      zoom: 1 !important; }\n      .module-content .swiper-slide-active div .map-highlighter-inactive .icon- {\n        color: #fff;\n        left: 19px;\n        position: relative;\n        font-size: 20px;\n        top: 20px; }\n    .module-content .swiper-slide-active .map-name {\n      zoom: 1 !important; }\n    .module-content .swiper-slide-active .toggle {\n      zoom: 1 !important; }\n    .module-content .swiper-slide-active .popover-read-more {\n      top: 119px !important;\n      min-width: 150px;\n      zoom: 1 !important;\n      margin-left: inherit !important;\n      margin-top: inherit !important; }\n    .module-content .swiper-slide-active .map-read-more-icon {\n      zoom: 1 !important;\n      top: 10px !important; }\n    .module-content .swiper-slide-active .read-more-icon-active {\n      zoom: 1 !important;\n      top: 10px !important; }\n  .module-content .container-chamada {\n    background: #fff;\n    width: 100%;\n    height: 300px;\n    position: absolute;\n    z-index: 9;\n    opacity: 0.7;\n    /* For Safari 3.1 to 6.0 */\n    transition: opacity 0.4s;\n    top: -30px; }\n  .module-content .btn-chamada {\n    max-width: 250px;\n    height: 90px;\n    background: #00BBFF;\n    font-size: 21px;\n    border-radius: 5px;\n    border: none;\n    color: #fff;\n    box-shadow: 0px 5px 5px #c1c1c1;\n    position: absolute;\n    z-index: 999;\n    width: 100%;\n    left: 41%;\n    top: 60px;\n    opacity: 1;\n    /* For Safari 3.1 to 6.0 */\n    transition: opacity 0.4s; }\n  .module-content #scrollCarrosel {\n    width: 97%;\n    margin-top: 33px; }\n    .module-content #scrollCarrosel .popover-generic {\n      min-width: 250px;\n      max-height: 102px;\n      top: 15px; }\n      .module-content #scrollCarrosel .popover-generic div .map-highlighter-inactive {\n        background: #00BBFF;\n        left: 20px;\n        top: 35px;\n        zoom: 0.8; }\n        .module-content #scrollCarrosel .popover-generic div .map-highlighter-inactive .icon- {\n          color: #fff;\n          left: 19px;\n          position: relative;\n          font-size: 20px;\n          top: 20px; }\n      .module-content #scrollCarrosel .popover-generic .map-name {\n        zoom: 0.8; }\n      .module-content #scrollCarrosel .popover-generic .toggle {\n        position: relative;\n        width: 60px;\n        height: 30px;\n        float: left;\n        left: 113px;\n        top: -21px;\n        zoom: 0.8; }\n      .module-content #scrollCarrosel .popover-generic .toggle input {\n        opacity: 0;\n        cursor: pointer;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 6;\n        width: 61px;\n        height: 34px; }\n      .module-content #scrollCarrosel .popover-generic .toggle input:checked ~ .btn {\n        left: 27px; }\n      .module-content #scrollCarrosel .popover-generic .toggle input:checked ~ .bg {\n        background: #EE6D52; }\n      .module-content #scrollCarrosel .popover-generic .toggle .btn {\n        display: block;\n        position: absolute;\n        z-index: 4;\n        top: 3px;\n        left: 6px;\n        width: 20px;\n        height: 24px;\n        background: #fff;\n        border-radius: 50%;\n        transition: left 0.25s ease; }\n      .module-content #scrollCarrosel .popover-generic .toggle .btn:after {\n        content: \"\";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -12.5px;\n        margin-left: -12.5px;\n        width: 26px;\n        background: #fff;\n        border-radius: 50%; }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels {\n        position: absolute;\n        top: 10px;\n        z-index: 2;\n        width: 100%;\n        font-family: Helvetica, sans-serif;\n        font-weight: bold;\n        color: #fff;\n        text-transform: uppercase;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels:before {\n        content: \"\\2713\";\n        position: absolute;\n        top: -5px;\n        zoom: 1.2;\n        left: 30px; }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels:after {\n        content: \"F\";\n        position: absolute;\n        right: 36px;\n        top: -6px; }\n      .module-content #scrollCarrosel .popover-generic .toggle .bg {\n        display: block;\n        position: absolute;\n        z-index: 0;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 40px;\n        background: #0093D0; }\n      .module-content #scrollCarrosel .popover-generic .popover-read-more {\n        top: 30px !important;\n        min-width: 150px;\n        zoom: 0.8;\n        margin-left: 12px;\n        margin-top: 19px;\n        left: 176px; }\n      .module-content #scrollCarrosel .popover-generic .map-read-more-icon {\n        zoom: 0.8; }\n      .module-content #scrollCarrosel .popover-generic .read-more-icon-active {\n        zoom: 0.8; }\n\n.popover-generic > .arrow {\n  border-width: 12px; }\n\n/*barra  de status da aplicacao da prova*/\n.container-status {\n  min-width: 1024px;\n  position: relative;\n  background: #FAFAFA;\n  width: 100%;\n  height: 100px;\n  margin-bottom: 70px; }\n  .container-status .barra-data {\n    width: 130px;\n    height: 58px;\n    float: left;\n    left: 20px;\n    text-align: center;\n    position: relative;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    top: 20px; }\n    .container-status .barra-data span {\n      color: #95989A;\n      font-size: 32px;\n      position: relative;\n      top: 10px; }\n  .container-status .barra-status {\n    width: 425px;\n    height: 45px;\n    position: relative;\n    float: right;\n    text-align: center;\n    border-radius: 5px;\n    top: 35px; }\n    .container-status .barra-status span {\n      color: #95989A;\n      font-size: 14px;\n      position: relative;\n      margin-right: 25px; }\n    .container-status .barra-status .btn {\n      background: #fff;\n      width: 182px;\n      height: 40px;\n      color: #B5B5B5;\n      border: 1px solid #B5B5B5; }\n      .container-status .barra-status .btn:hover {\n        background: #DDDDDD;\n        color: #B6B6B6 !important; }\n      .container-status .barra-status .btn:active {\n        color: #fff !important;\n        background: #CCCCCC; }\n  .container-status .bio {\n    position: relative;\n    width: 300px;\n    float: left;\n    font-size: 14px;\n    left: 20px;\n    top: 20px; }\n    .container-status .bio .discipline {\n      min-width: 73px;\n      height: 21px;\n      background: #00BBFF;\n      color: #fff;\n      font-size: 11px;\n      padding: 3px;\n      left: 45px;\n      text-align: center;\n      float: left;\n      text-transform: uppercase; }\n    .container-status .bio .icon-person {\n      zoom: 0.6;\n      float: left;\n      margin-top: 22px;\n      margin-left: -5px; }\n    .container-status .bio span {\n      margin: 12px; }\n    .container-status .bio small {\n      position: absolute;\n      float: left;\n      top: 13px; }\n    .container-status .bio .font-prova {\n      font-size: 18px; }\n  .container-status .font-prova {\n    position: absolute;\n    top: 55px;\n    left: 164px;\n    font-size: 22px; }\n\n/*a partir daqui será as iterações com drag drop*/\n.container-drag {\n  background: #FAFAFA;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 70% 30%;\n      grid-template-columns: 70% 30%;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  grid-template-areas: \"items assets\"; }\n  .container-drag .class-main {\n    grid-area: items;\n    margin: 5px; }\n  .container-drag .class-assets {\n    grid-area: assets;\n    margin: 5px; }\n  .container-drag .geral-tit {\n    font-size: 22px;\n    background: #8E86F7;\n    color: #fff;\n    height: 48px;\n    border-radius: 4px;\n    border: none;\n    margin: 0;\n    padding-left: 25px;\n    padding-bottom: 0;\n    padding-top: 7px;\n    margin-bottom: 20px;\n    width: auto !important; }\n    .container-drag .geral-tit .icon-aulas {\n      float: left; }\n    .container-drag .geral-tit .icon-anexo {\n      float: left;\n      zoom: 0.7;\n      margin-top: 5px; }\n    .container-drag .geral-tit .icon-grid {\n      float: left;\n      zoom: 0.7;\n      margin-top: 5px; }\n    .container-drag .geral-tit div {\n      font-weight: 100;\n      position: relative;\n      left: 15px;\n      top: 3px; }\n  .container-drag .tit-anexo {\n    background: #61CAD8; }\n  .container-drag .tit-recurso {\n    background: #F4AD67; }\n  .container-drag .container-drag-in {\n    margin-bottom: 20px;\n    width: auto !important;\n    min-height: 200px; }\n    .container-drag .container-drag-in .container-sub-anexo {\n      height: 242px; }\n      .container-drag .container-drag-in .container-sub-anexo .container-button {\n        width: 328px;\n        position: relative;\n        float: left;\n        margin: 1%;\n        height: 203px; }\n      .container-drag .container-drag-in .container-sub-anexo .add-button {\n        height: auto;\n        top: 0;\n        margin-top: inherit;\n        left: 100px;\n        position: relative; }\n    .container-drag .container-drag-in .container-sub-recurso {\n      height: 395px; }\n    .container-drag .container-drag-in .btn-more {\n      width: 70%;\n      position: absolute;\n      text-align: center;\n      max-width: 1119px;\n      margin-top: 30px; }\n      .container-drag .container-drag-in .btn-more button {\n        background: #F7F7F7;\n        width: 121px;\n        height: 33px;\n        color: #B5B5B5;\n        border: 1px solid #B5B5B5; }\n        .container-drag .container-drag-in .btn-more button:hover {\n          background: #DDDDDD;\n          color: #B6B6B6 !important; }\n        .container-drag .container-drag-in .btn-more button:active {\n          color: #fff !important;\n          background: #CCCCCC; }\n  .container-drag .container-anexo {\n    height: 342px; }\n  .container-drag .container-recurso {\n    height: 480px; }\n\n/*tabs*/\n.tab-section {\n  padding: 50px;\n  padding-left: 20px; }\n  .tab-section ul.tab-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .tab-section ul.tab-menu .tab-link {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      list-style: none;\n      border: 1px solid #fff;\n      font-size: 16px;\n      border-radius: 18px;\n      font-weight: lighter;\n      text-align: center;\n      margin: 5px; }\n      .tab-section ul.tab-menu .tab-link a {\n        color: #9A9C9E !important;\n        text-decoration: none;\n        display: block;\n        padding: 5px 15px; }\n      .tab-section ul.tab-menu .tab-link:hover {\n        background-color: #eee; }\n    .tab-section ul.tab-menu .tab-link.tab-active {\n      color: #fff !important;\n      background-color: #00ACEC !important;\n      transition: background-color 0.8s;\n      border: 1px solid #ddd; }\n      .tab-section ul.tab-menu .tab-link.tab-active a {\n        color: #fff !important; }\n  .tab-section .tab-content {\n    white-space: pre-line;\n    font-size: 12px;\n    margin-top: 20px;\n    line-height: 16px; }\n\n.container-anotacao {\n  width: 100%;\n  position: relative;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container-anotacao .add-button {\n    margin: 25px 60px;\n    float: none;\n    width: auto;\n    height: auto;\n    left: unset;\n    top: unset;\n    position: unset; }\n  .container-anotacao .map-content-popover {\n    width: 75%;\n    float: none;\n    position: unset;\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .container-anotacao .map-content-popover .icon-favorite {\n      color: #00BBFF;\n      float: right;\n      right: 13px;\n      position: relative;\n      top: -3px; }\n    .container-anotacao .map-content-popover .cont-anotation {\n      height: 400px;\n      margin: 25px;\n      float: none; }\n    .container-anotacao .map-content-popover .map-name {\n      padding-top: 15px;\n      left: 20px;\n      width: 269px;\n      font-size: 20px; }\n    .container-anotacao .map-content-popover small {\n      position: relative;\n      left: 20px;\n      top: 3px; }\n    .container-anotacao .map-content-popover .descripition {\n      padding: 20px;\n      position: relative;\n      font-size: 18px;\n      font-weight: 300;\n      min-height: 315px; }\n    .container-anotacao .map-content-popover .map-read-more-icon {\n      top: -90px;\n      z-index: 3;\n      position: relative; }\n    .container-anotacao .map-content-popover .map-read-more-icon-active {\n      top: -90px;\n      z-index: 3;\n      position: relative; }\n    .container-anotacao .map-content-popover .popover-read-more {\n      top: 378px !important;\n      left: 176px;\n      z-index: 2; }\n\n@media (max-width: 1543px) {\n  .container-drag .geral-tit {\n    width: 60%; }\n  .container-drag .container-drag-in {\n    width: 60%; }\n    .container-drag .container-drag-in .btn-more {\n      width: 88%;\n      max-width: 706px;\n      position: relative; } }\n\n.new-anotation {\n  font-size: 16px;\n  padding: 30px;\n  color: #5A5D5F; }\n  .new-anotation .btn-success, .new-anotation .btn-default {\n    float: right;\n    width: 84px;\n    height: 39px;\n    padding-top: 8px;\n    margin: 10px; }\n  .new-anotation .btn-default:hover {\n    background-color: #B6B6B6 !important; }\n  .new-anotation .form-control {\n    border: 1px solid #E8E8E8;\n    border-radius: 0;\n    height: 59px;\n    max-width: 772px; }\n    .new-anotation .form-control:hover {\n      border: 1px solid #656565;\n      background: #fff !important; }\n    .new-anotation .form-control:focus {\n      border: 1px solid #656565;\n      background: #fff !important; }\n  .new-anotation p {\n    color: #95989A; }\n  .new-anotation .radio-inline input[type=radio] {\n    position: absolute;\n    margin-top: 0px;\n    margin-left: -25px;\n    height: 16px;\n    box-shadow: none; }\n  .new-anotation .radio-inline {\n    margin: 0.5rem;\n    padding-left: 0; }\n    .new-anotation .radio-inline label {\n      font-weight: 400; }\n  .new-anotation textarea {\n    border: 1px solid #E8E8E8;\n    border-radius: 0;\n    overflow: auto;\n    resize: both !important;\n    min-width: 660px;\n    width: 100% !important;\n    height: 345px;\n    padding: 20px;\n    padding-top: 10px; }\n    .new-anotation textarea:hover {\n      border: 1px solid #656565;\n      background: #fff !important; }\n    .new-anotation textarea:focus {\n      border: 1px solid #656565;\n      background: #fff !important; }\n\n.class-sortable-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .class-sortable-wrapper .class-sortable-item {\n    border: 1px solid red; }\n\n.card-holder {\n  width: 328px;\n  display: inline-block;\n  margin: 1%; }\n  .card-holder:hover .card-author:before {\n    border: solid #9F9F9F;\n    border-width: 0px 1px 1px 0; }\n  .card-holder:hover .card {\n    border: 1px solid #9F9F9F; }\n\n.card {\n  width: 328px;\n  height: 134px;\n  background: #fff;\n  border: 1px solid #E8E8E8;\n  margin: 1%;\n  transition: border 0.3s;\n  border-radius: 6px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .card:hover {\n    border: 1px solid #9F9F9F; }\n  .card .card-img {\n    width: 328px; }\n  .card .card-bullet {\n    background: #00BBFF;\n    color: #fff;\n    font-size: 20px;\n    width: 60px;\n    height: 60px;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 65px;\n    border-radius: 50%;\n    margin: 25px; }\n  .card .card-title {\n    width: 190px; }\n\n.card-thumb {\n  height: 294px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: end; }\n  .card-thumb .card-title {\n    width: auto; }\n  .card-thumb .thumb {\n    width: 327px;\n    height: 161px;\n    overflow: hidden; }\n    .card-thumb .thumb img {\n      min-width: 327px;\n      max-width: 327px; }\n\n.card-author {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative; }\n  .card-author:before {\n    content: \"\";\n    border: solid #E8E8E8;\n    border-width: 0px 1px 1px 0;\n    display: block;\n    padding: 7px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    position: absolute;\n    left: 36px;\n    top: -10px;\n    background: #fff;\n    transition: border-bottom-color 0.8s, border-right-color 0.8s;\n    zoom: 1; }\n  .card-author span {\n    width: 200px; }\n  .card-author .card-author-avatar {\n    width: 50px;\n    height: 50px;\n    background: #CCCCCC;\n    border-radius: 50%;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 52px;\n    color: #fff;\n    font-size: 20px;\n    margin: 20px; }\n    .card-author .card-author-avatar.icon-icon-ftd::before {\n      color: #fff; }\n\n.card.card-type-class {\n  border: 1px solid #8E86F7;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-class .card-bullet {\n    background-color: #8E86F7; }\n  .card.card-type-class:hover {\n    border: 1px solid #5C57A1;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-class:hover .card-bullet {\n    background-color: #5C57A1; }\n\n.card.card-type-file {\n  border: 1px solid #61CAD8;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-file .card-bullet {\n    background-color: #61CAD8; }\n  .card.card-type-file:hover {\n    border: 1px solid #4896A1;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-file:hover .card-bullet {\n    background-color: #4896A1; }\n\n.card.card-type-resource {\n  border: 1px solid #F4AD67;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-resource .card-bullet {\n    background-color: #F4AD67; }\n  .card.card-type-resource:hover {\n    border: 1px solid #A17244;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-resource:hover .card-bullet {\n    background-color: #A17244; }\n\n.confirmation-panel {\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 30px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .confirmation-panel span {\n    width: 80px;\n    height: 80px;\n    background-color: #5cb85c;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 50%;\n    color: #fff;\n    margin: 20px; }\n  .confirmation-panel .confirmation-content p {\n    margin-bottom: 30px;\n    margin-top: 30px; }\n  .confirmation-panel .confirmation-content .btn.btn-white {\n    font-size: 12px;\n    min-width: 100px;\n    border: 1px solid #999;\n    background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/classroom/modal/classroom-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__ = __webpack_require__("../../../../ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classroom_service__ = __webpack_require__("../../../../../src/app/modules/classroom/classroom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ClassroomModalComponent = (function () {
    function ClassroomModalComponent(http, auth, bsModalRef, modalService, classroomService, formBuilder) {
        this.http = http;
        this.auth = auth;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.classroomService = classroomService;
        this.formBuilder = formBuilder;
        this.config = {
            scrollbar: null,
            direction: 'horizontal',
            slidesPerView: 8,
            scrollbarHide: true,
            keyboardControl: true,
            mousewheelControl: true,
            scrollbarDraggable: true,
            scrollbarSnapOnRelease: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            lazyLoading: true
        };
        this.classrs = [];
        this.showClass = true;
        this.showConfirmPublish = false;
        this.showConfirmFinish = false;
        this.itensAssets = [];
        this.itemStringsRight = [];
        this.newAnotation = false;
        this.shareableRoles = [
            this.formBuilder.group({ 'id': 2, 'name': 'Coordenador', 'checked': false }),
            this.formBuilder.group({ 'id': 4, 'name': 'Diretoria', 'checked': false }),
            this.formBuilder.group({ 'id': 7, 'name': 'Professores', 'checked': false }),
            this.formBuilder.group({ 'id': 3, 'name': 'Pais / Responsáveis', 'checked': false }),
        ];
        this.annotationForm = this.formBuilder.group({
            titleNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(40)],
            rolesNewAnnotation: this.formBuilder.array(this.shareableRoles),
            radioNewAnotation: false,
            studentsNewAnotation: [''],
            textNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(250)],
            idNote: ''
        });
        /**
         * @var Array A list of exams scheduled to the group discipline class date
         */
        this.exams = [];
        /**
         * @var boolean Define if the group discipline has an planner map attached
         */
        this.hasMap = false;
        this.hasCallingList = false;
        this.pageClass = 1;
        this.pageResources = 1;
        this.pageFiles = 1;
    }
    ClassroomModalComponent.prototype.ngOnInit = function () {
        this.modalServiceConfig = this.modalService.config;
        this.model = this.modalServiceConfig.model;
        this.class_id = this.model.meta.id; //ID CLASSE
        this.loadStudents();
        this.loadPresenceList();
        this.loadClass();
        this.loadAnnotations();
    };
    ClassroomModalComponent.prototype.ngOnChanges = function () {
        if (this.directiveRef) {
            this.directiveRef.update(true);
        }
    };
    Object.defineProperty(ClassroomModalComponent.prototype, "rolesNewAnnotation", {
        get: function () {
            return this.annotationForm.get('rolesNewAnnotation');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ClassroomModalComponent.prototype.loadClass = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* URLSearchParams */]();
        params.set('complete', '1');
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.index.url(this.class_id), { search: params })
            .toPromise()
            .then(function (response) {
            _this.class = response.json().data;
            if (Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["has"])(_this.class, 'group_discipline.planner_map_id') ? (_this.class.group_discipline.planner_map_id != null) : false) {
                if (Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["has"])(_this.class.class_sequence, 'sequence')) {
                    _this.hasMap = true;
                    _this.selectedItem = _this.class.class_sequence.sequence.item[0].type.id;
                    // If is a sequence owned by FTD, set the author as FTD
                    if (Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["has"])(_this.class, 'class_sequence.sequence.author')) {
                        if (_this.class.class_sequence.sequence.is_FTD) {
                            _this.class.class_sequence.sequence.author.name = 'FTD';
                        }
                    }
                    // ADICIONA A COR DO TIPO DO OBJETO
                    _this.seqClasses = _this.class.class_sequence.sequence.class.map(function (o) {
                        o.ctype = 'class';
                        return o;
                    });
                    _this.seqResources = _this.class.class_sequence.sequence.resources.map(function (o) {
                        o.ctype = 'resource';
                        return o;
                    });
                    _this.seqFiles = _this.class.class_sequence.sequence.files.map(function (o) {
                        o.ctype = 'file';
                        return o;
                    });
                    // PRIMEIRA PAGINA
                    _this.itensClasses = _this.paginate(_this.seqClasses, 2, _this.pageClass);
                    _this.itensResources = _this.paginate(_this.seqResources, 2, _this.pageResources);
                    _this.itensFiles = _this.paginate(_this.seqFiles, 2, _this.pageFiles);
                }
                // CARREGA OS ASSETS
                var _arrAux = void 0;
                _arrAux = _this.class.classes.map(function (o) {
                    o.ctype = 'class';
                    return o;
                });
                _this.itensAssets = _this.itensAssets.concat(_arrAux);
                _arrAux = _this.class.resources.map(function (o) {
                    o.ctype = 'resource';
                    return o;
                });
                _this.itensAssets = _this.itensAssets.concat(_arrAux);
                _arrAux = _this.class.files.map(function (o) {
                    o.ctype = 'file';
                    return o;
                });
                _this.itensAssets = _this.itensAssets.concat(_arrAux);
            }
            _this.loadExams();
        }));
    };
    /**
     * Load a list of GASP exams scheduled to the group discipline class date
     @return void
     */
    ClassroomModalComponent.prototype.loadExams = function () {
        var _this = this;
        var is_student = (this.auth.currentUser.info.role === 'STUD' || this.auth.currentUser.info.role === 'PARN');
        var _url = (is_student) ? __WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].gasp.exam.student.url() : __WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].gasp.exam.index.url();
        var _params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* URLSearchParams */]();
        _params.set('date_start', this.class.date + ' 00:00:01');
        _params.set('date_end', this.class.date + ' 23:59:59');
        this.busy = [];
        this.busy.push(this.http
            .get(_url, { search: _params })
            .toPromise()
            .then(function (response) {
            var _exams = response.json().data;
            if (_exams.length) {
                _this.exams = _exams.map(function (_exam, _key) {
                    var _now = __WEBPACK_IMPORTED_MODULE_6_moment__();
                    var _dt_start = (_exam.date_start) ? __WEBPACK_IMPORTED_MODULE_6_moment__(_exam.date_start) : null;
                    var _dt_end = (_exam.date_end) ? __WEBPACK_IMPORTED_MODULE_6_moment__(_exam.date_end) : null;
                    var _diff = (_dt_end) ? _dt_end.diff(_dt_start) : null;
                    var _passed = (_dt_start) ? _now.diff(_dt_start) : null;
                    var _percent = (_passed && _diff) ? (100 * _passed) / _diff : null;
                    _percent = (_percent) ? _percent : 0;
                    var _status;
                    var _status_id = (_exam.exam_student && _exam.exam_student.length) ? _exam.exam_student[0].status : 0;
                    switch (_status_id) {
                        case 0:
                            _status = 'Pendente';
                            break;
                        case 1:
                            _status = 'Entregue';
                            break;
                        case 2:
                            _status = 'Corrigido';
                            break;
                    }
                    return {
                        id: _exam.id,
                        percent: _percent,
                        icon: 'icon-monitor',
                        title: _exam.title,
                        description: _exam.description,
                        discipline: _exam.discipline.name,
                        exam_type: _exam.exam_type,
                        status: _status,
                        is_enable: (_exam.exam_type == 1 && __WEBPACK_IMPORTED_MODULE_6_moment__().isBetween(_dt_start, _dt_end)) ? true : false,
                        autor: (_exam.is_FTD) ? 'FTD' : _exam.author.name,
                        date_start: (_dt_start) ? _dt_start.format('DD/MM') : null,
                        date_end: (_dt_end) ? _dt_end.format('DD/MM') : null,
                        question_count: _exam.questions_exam_count,
                        time: _exam.exam_time,
                        status_id: _status_id,
                    };
                });
            }
        }));
    };
    ClassroomModalComponent.prototype.loadPresenceList = function () {
        var _this = this;
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.presence.url(this.class_id))
            .toPromise()
            .then(function (response) {
            var _students = response.json().data;
            if (_students.length) {
                // POPULA CHAMADA
                _this.hasCallingList = (_students[0].presence.length > 0);
                _this.classrs = _students.map(function (o) {
                    var presenceEnabled = (o.presence.length > 0 && 'presence' in o.presence[0]);
                    var hasPresence = (presenceEnabled && o.presence[0].presence);
                    var presence_id = (presenceEnabled) ? o.presence[0].id : null;
                    var gdPersonId = (presenceEnabled) ? o.presence[0].group_discipline_person_id : null;
                    return {
                        title: o.name,
                        id: o.id,
                        gd_person_id: gdPersonId,
                        presence_id: presence_id,
                        presence: hasPresence,
                        description: '',
                        readMore: false
                    };
                });
            }
        }));
    };
    ClassroomModalComponent.prototype.togglePresence = function (_id, _gdpersonId) {
        var _update = { 'group_discipline_person_id': _gdpersonId };
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.presence.toggle(this.class_id, _id), _update)
            .toPromise());
    };
    ClassroomModalComponent.prototype.enableCallingList = function () {
        var _this = this;
        this.busy.push(this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.presence.enable(this.class_id), {})
            .toPromise()
            .then(function (response) {
            var _students = response.json().data;
            // POPULA CHAMADA
            _this.hasCallingList = (_students[0].presence.length > 0);
            _this.classrs = _students.map(function (o) {
                var hasPresence = (o.presence.length > 0 && 'presence' in o.presence[0]);
                var presence_id = (hasPresence) ? o.presence[0].id : null;
                var gdPersonId = (hasPresence) ? o.presence[0].group_discipline_person_id : null;
                return {
                    title: o.name,
                    id: o.id,
                    gd_person_id: gdPersonId,
                    presence_id: presence_id,
                    presence: hasPresence,
                    description: '',
                    readMore: false
                };
            });
            _this.directiveRef.update(true);
        }));
        setTimeout(function () {
            _this.cont = 'none';
        }, 400);
        this.fadeOut = '0';
    };
    ClassroomModalComponent.prototype.loadAnnotations = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* URLSearchParams */]();
        params.set('group_discipline_class_id', this.class_id.toString());
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.note.index.url(), { search: params })
            .toPromise()
            .then(function (response) {
            switch (response.status) {
                case 200:
                    _this.annotations = response.json().data;
                    break;
                default:
                    _this.annotations = [];
                    break;
            }
        }));
    };
    ClassroomModalComponent.prototype.deleteNote = function (_noteId) {
        var _this = this;
        this.busy.push(this.http
            .delete(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.note.index.url(_noteId))
            .toPromise()
            .then(function (response) {
            _this.loadAnnotations();
        }));
    };
    ClassroomModalComponent.prototype.togglepinNote = function (_noteId) {
        var _this = this;
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.note.togglepin.url(_noteId), {})
            .toPromise()
            .then(function (response) {
            _this.loadAnnotations();
        }));
    };
    ClassroomModalComponent.prototype.editNote = function (_note) {
        var _loop_1 = function (_i) {
            var roleId = this_1.shareableRoles[_i].value.id;
            var index = _note.roles.findIndex(function (i) { return i.id === roleId; });
            if (index >= 0) {
                this_1.shareableRoles[_i].patchValue({
                    checked: true
                });
            }
        };
        var this_1 = this;
        for (var _i = 0; _i < this.shareableRoles.length; _i++) {
            _loop_1(_i);
        }
        var hasStudents = false;
        var selectedStudents = [];
        var _loop_2 = function (_i) {
            var roleId = this_2.studentsDrop[_i].value;
            var index = _note.persons.findIndex(function (i) { return i.id === roleId; });
            if (index >= 0) {
                selectedStudents.push(this_2.studentsDrop[_i]);
            }
        };
        var this_2 = this;
        for (var _i = 0; _i < this.studentsDrop.length; _i++) {
            _loop_2(_i);
        }
        hasStudents = (selectedStudents.length > 0);
        this.annotationForm = this.formBuilder.group({
            titleNewAnnotation: [_note.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            rolesNewAnnotation: this.formBuilder.array(this.shareableRoles),
            radioNewAnotation: hasStudents,
            studentsNewAnotation: [selectedStudents],
            textNewAnnotation: [_note.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            idNote: _note.id
        });
        this.newAnotation = true;
    };
    ClassroomModalComponent.prototype.loadStudents = function () {
        var _this = this;
        this.busy = [];
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.student.index.url())
            .toPromise()
            .then(function (response) {
            _this.students = response.json().data;
            // POPULA O DROP DE ESTUDANTES DA ANOTAÇÃO
            _this.studentsDrop = _this.students.map(function (o) {
                return {
                    display: o.name,
                    value: o.id
                };
            });
        }));
    };
    ClassroomModalComponent.prototype.studentNote = function (_student) {
        var hasStudents = false;
        var selectedStudents = [];
        for (var _i = 0; _i < this.studentsDrop.length; _i++) {
            var studentId = this.studentsDrop[_i].value;
            if (_student.id === studentId) {
                selectedStudents.push(this.studentsDrop[_i]);
            }
        }
        hasStudents = (selectedStudents.length > 0);
        this.annotationForm = this.formBuilder.group({
            titleNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            rolesNewAnnotation: this.formBuilder.array(this.shareableRoles),
            radioNewAnotation: hasStudents,
            studentsNewAnotation: [selectedStudents],
            textNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            idNote: ''
        });
        this.newAnotation = true;
        _student.readMore = false;
    };
    ClassroomModalComponent.prototype.addAnotation = function () {
        this.annotationForm = this.formBuilder.group({
            titleNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            rolesNewAnnotation: this.formBuilder.array(this.shareableRoles),
            radioNewAnotation: false,
            studentsNewAnotation: [''],
            textNewAnnotation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            idNote: ''
        });
        this.newAnotation = true;
    };
    ClassroomModalComponent.prototype.saveAnnotation = function (_v) {
        var _this = this;
        this.busy = [];
        var _post = {
            'title': this.annotationForm.value.titleNewAnnotation,
            'description': this.annotationForm.value.textNewAnnotation,
            'group_discipline_class_id': this.class_id,
            'pinned': 0,
            'group_discipline_person_ids': [],
            'shared_with_roles_ids': []
        };
        var selectedRoles = this.annotationForm.value.rolesNewAnnotation.filter(function (_role) { return _role.checked; }).map(function (a) { return a.id; });
        if (selectedRoles.length > 0) {
            _post.shared_with_roles_ids = selectedRoles;
        }
        if (this.annotationForm.value.studentsNewAnotation != '') {
            _post.group_discipline_person_ids = this.annotationForm.value.studentsNewAnotation.map(function (a) { return a.value; });
        }
        if (this.annotationForm.value.idNote == '') {
            // POST
            this.busy.push(this.http
                .post(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.note.index.url(), _post)
                .toPromise()
                .then(function (response) {
                _this.newAnotation = false;
                _this.loadAnnotations();
            }));
        }
        else {
            // UPDATE
            this.busy.push(this.http
                .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].group.note.index.url(this.annotationForm.value.idNote), _post)
                .toPromise()
                .then(function (response) {
                _this.newAnotation = false;
                _this.loadAnnotations();
            }));
        }
    };
    ClassroomModalComponent.prototype.addDropItem = function (_e) {
        var index;
        var _post = {
            'type': _e.ctype,
            'id': Number(_e.id)
        };
        index = this.itensClasses.findIndex(function (i) { return i.id === _e.id; });
        if (index >= 0) {
            this.itensClasses.splice(index, 1);
        }
        index = this.itensResources.findIndex(function (i) { return i.id === _e.id; });
        if (index >= 0) {
            this.itensResources.splice(index, 1);
        }
        index = this.itensFiles.findIndex(function (i) { return i.id === _e.id; });
        if (index >= 0) {
            this.itensFiles.splice(index, 1);
        }
        index = this.itensAssets.findIndex(function (i) { return i.id === _e.id; });
        if (index < 0) {
            this.itensAssets.push(_e);
        }
        // FAZ A POSTAGEM
        this.busy.push(this.http
            .post(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.asset.url(this.class_id), _post)
            .toPromise());
    };
    ClassroomModalComponent.prototype.addDropBack = function (_e, type, destiny) {
        this.busy = [];
        var index;
        if (_e.ctype == type) {
            index = this.itensAssets.findIndex(function (i) { return i.id === _e.id; });
            if (index >= 0) {
                this.itensAssets.splice(index, 1);
            }
            index = destiny.findIndex(function (i) { return i.id === _e.id; });
            if (index < 0) {
                destiny.push(_e);
            }
            //REMOVE O ASSET
            var _type = _e.ctype;
            var _id = Number(_e.id);
            var _delete = {
                'method': __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
                'body': {
                    'item': (_a = {}, _a[_type] = _id, _a)
                }
            };
            // EXCLUI
            this.busy.push(this.http
                .delete(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.asset.url(this.class_id), _delete)
                .toPromise());
        }
        var _a;
    };
    ClassroomModalComponent.prototype.toogleReadMore = function (p) {
        (p.readMore = !p.readMore);
    };
    ClassroomModalComponent.prototype.resolveStudentNumber = function (i) {
        var chosenOne = document.getElementsByClassName('swiper-slide-active');
        return (chosenOne[0] !== undefined) ? chosenOne[0].id === this.classrs[0].id : false;
    };
    ClassroomModalComponent.prototype.paginate = function (a, i, p) {
        var it = (p - 1) * i;
        var to = (i + it);
        var from = (to - i);
        return a.slice(from, to);
    };
    ClassroomModalComponent.prototype.publishClass = function () {
        var _this = this;
        // PUBLICA AULA
        this.busy = [];
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.publish.url(this.class_id), {})
            .toPromise()
            .then(function (response) {
            _this.loadClass();
            _this.showClass = false;
            _this.showConfirmPublish = true;
            _this.showConfirmFinish = false;
        }));
    };
    ClassroomModalComponent.prototype.finishClass = function () {
        var _this = this;
        // PUBLICA AULA
        this.busy = [];
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.finish.url(this.class_id), {})
            .toPromise()
            .then(function (response) {
            _this.loadClass();
            _this.showClass = false;
            _this.showConfirmPublish = false;
            _this.showConfirmFinish = true;
        }));
    };
    ClassroomModalComponent.prototype.confirmOk = function () {
        this.showClass = true;
        this.showConfirmPublish = false;
        this.showConfirmFinish = false;
        this.classroomService.emitterClassStatus();
    };
    ClassroomModalComponent.prototype.undoPublish = function () {
        var _this = this;
        this.busy = [];
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.index.url(this.class_id), { 'status': 0 })
            .toPromise()
            .then(function (response) {
            _this.loadClass();
            _this.showClass = true;
            _this.showConfirmPublish = false;
            _this.showConfirmFinish = false;
        }));
    };
    ClassroomModalComponent.prototype.undoFinish = function () {
        var _this = this;
        this.busy = [];
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.publish.url(this.class_id), {})
            .toPromise()
            .then(function (response) {
            _this.showClass = true;
            _this.showConfirmPublish = false;
            _this.showConfirmFinish = false;
        }));
    };
    ClassroomModalComponent.prototype.undoClose = function () {
        var _this = this;
        this.busy = [];
        this.busy.push(this.http
            .put(__WEBPACK_IMPORTED_MODULE_8__routes_api_routes__["a" /* API_ROUTES */].class.index.url(this.class_id), { 'status': 1 })
            .toPromise()
            .then(function (response) {
            _this.loadClass();
            _this.showClass = true;
            _this.showConfirmPublish = false;
            _this.showConfirmFinish = false;
        }));
    };
    return ClassroomModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperComponent"]) === "function" && _a || Object)
], ClassroomModalComponent.prototype, "componentRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_swiper_wrapper__["SwiperDirective"]) === "function" && _b || Object)
], ClassroomModalComponent.prototype, "directiveRef", void 0);
ClassroomModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-classroom-modal-content',
        template: __webpack_require__("../../../../../src/app/modules/classroom/modal/classroom-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/classroom/modal/classroom-modal.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_services_http_http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__classroom_service__["a" /* ClassroomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__classroom_service__["a" /* ClassroomService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _j || Object])
], ClassroomModalComponent);

var _a, _b, _c, _d, _f, _g, _h, _j;
//# sourceMappingURL=classroom-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/classroom/student/classroom-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]='busy'>\n\t<div class=\"col-header\" *ngIf=\"class\" >\n\t\t<div class=\"col-tit\">{{class.date | date:'fullDate'}}</div>\n\t\t<span class=\"icon-btn-fechar\" (click)='bsModalRef.hide()'></span>\n\t\t<div class=\"container-events\">\n\t\t\t<ng-template *ngIf='hasMap' #tolTemplate>{{ class?.class_sequence?.sequence?.title }}</ng-template>\n\t\t\t<span class=\"text-events-calendar\" [tooltip]=\"tolTemplate\" (click)=\"teste()\" placement=\"bottom\">\n\t\t\t\t<div class=\"btn-aplicar\">•</div>{{class.hour_start | slice:0:5 }} - {{class.hour_end | slice:0:5 }}\n\t\t\t</span>\n\t\t\t<span class=\"status\" *ngIf=\"class.status == 2\" >Aula Encerrada</span>\n\t\t</div>\n\t\t<br><hr>\n\t</div>\n\t<div class=\"module-content\">\n\t\t<div class=\"chamada-box\" *ngIf='exams.length'>\n\t\t\t<div class=\"titulos\">\n\t\t\t\tAtividades nesta aula\n\t\t\t</div>\n\t\t\t<div class=\"container-status\" *ngFor=\"let exam of exams\">\n\t\t\t\t<div class=\"barra-data\">\n\t\t\t\t\t<span>{{ exam.date_end }}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bio\">\n\t\t\t\t\t<span class=\"discipline\">{{ exam.discipline }}</span>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"font-prova\">{{ exam.description }}</span>\n\t\t\t\t<div class=\"barra-status\">\n\t\t\t\t\t<span><strong>{{ exam.status }}</strong></span>\n\t\t\t\t\t<a class=\"btn\" *ngIf='exam.is_enable && auth?.currentUser?.info?.role !== (\"STUD\" || \"PARN\")' [routerLink]='[\"/atividades/aplicadas/detalhes\", exam.id]' (click)=\"bsModalRef.hide()\">Ver atividade</a>\n\t\t\t\t\t<a class=\"btn\" *ngIf='exam.is_enable && auth?.currentUser?.info?.role === (\"STUD\" || \"PARN\")' [routerLink]='[\"/atividades/aplicadas/detalhes\", exam.id]' (click)=\"bsModalRef.hide()\">Ver atividade</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"hasMap && class.status == 1 \" >\n\n\t\t\t<div class=\"titulos\" *ngIf=\"class.classes.length > 0\" >\n\t\t\t\tAulas de hoje\n\t\t\t</div>\n\n\t\t\t<div *ngFor=\"let item of class.classes\" class='card' >\n\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-title\" >{{item?.name}}</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"titulos\"  *ngIf=\"class.files.length > 0\" >\n\t\t\t\tAnexos para a aula de hoje\n\t\t\t</div>\n\n\t\t\t<div class='card-holder' *ngFor=\"let item of class.files\">\n\t\t\t\t<div class='card' >\n\t\t\t\t\t<div class='card-bullet'>\n\t\t\t\t\t\t<span class=\"icon-\">list</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-title\" >{{item.title}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t<span>Criado por <strong>{{item.owner.name}}</strong> em {{item.created_at | date:'short'}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"titulos\"  *ngIf=\"class.resources.length > 0\" >\n\t\t\t\tRecursos para a aula de hoje\n\t\t\t</div>\n\n\t\t\t<div class='card-holder' *ngFor=\"let item of class.resources\">\n\t\t\t\t<div class='card card-thumb' >\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img [src]=\"item.repositories.thumbnail\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-title\" >{{item.name}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-author\" >\n\t\t\t\t\t<div class=\"card-author-avatar icon-icon-ftd\"></div>\n\t\t\t\t\t<span>Tipo: <strong>{{item?.content_player?.player}}</strong></span>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/classroom/student/classroom-student.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.col-header {\n  padding: 5px;\n  margin-top: 25px; }\n  .col-header .col-tit {\n    font-size: 22px;\n    font-weight: 400;\n    margin-left: 40px; }\n  .col-header .container-events {\n    top: 0;\n    left: 40px;\n    position: relative; }\n    .col-header .container-events .text-events-calendar {\n      max-width: 150px;\n      float: left;\n      margin: 5px;\n      background: #F5F5F5;\n      border: 1px solid #9A9A9A;\n      border-radius: 25px;\n      width: 95%;\n      height: 31px;\n      padding: 5px;\n      font-size: 13px;\n      color: #4C4C4D;\n      white-space: nowrap;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .col-header .container-events .text-events-calendar:hover {\n        background: #52C150;\n        border: 1px solid #52C150;\n        color: #fff; }\n      .col-header .container-events .text-events-calendar .btn-aplicar {\n        color: #52C150;\n        float: left;\n        position: relative;\n        font-size: 40px;\n        margin-top: -18px;\n        margin-left: 12px;\n        margin-right: 5px; }\n    .col-header .container-events .status {\n      float: left;\n      color: #95989A;\n      font-size: 14px;\n      top: 10px;\n      position: relative;\n      left: 5px; }\n  .col-header .icon-btn-fechar {\n    margin-top: -70px;\n    padding: 5px !important;\n    margin-right: 20px; }\n  .col-header .btn {\n    width: 132px;\n    height: 39px;\n    color: #fff;\n    float: right;\n    font-size: 14px;\n    margin-right: 85px;\n    margin-top: -25px; }\n    .col-header .btn:hover {\n      border: 2px solid #43AF41; }\n    .col-header .btn:active {\n      background: #43AF41; }\n  .col-header hr {\n    margin-top: 35px; }\n  .col-header .container-events .text-events-calendar:hover > .btn-aplicar {\n    color: #fff; }\n\n.add-button {\n  margin-right: 28px; }\n  .add-button .icon-btn-fechar {\n    color: #fff !important;\n    float: none !important;\n    /* padding-top: 34% !important; */\n    zoom: inherit !important;\n    margin-bottom: 20px;\n    /* transform: rotate(0); */\n    padding: 0 !important;\n    line-height: 126px; }\n\n.module-content {\n  padding: 30px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-left: 0; }\n  .module-content .headerMap .col-bind .barra-bio {\n    width: 135px;\n    background: #00ACEC;\n    border-radius: initial;\n    border-top-left-radius: 5px; }\n    .module-content .headerMap .col-bind .barra-bio .barra-aula .number-aulas span {\n      font-size: 16px;\n      font-weight: normal; }\n  .module-content .headerMap .col-bind .barra-tipo {\n    width: auto;\n    min-width: 518px;\n    background: #00BBFF;\n    border-radius: initial;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    line-height: 1.2; }\n    .module-content .headerMap .col-bind .barra-tipo span {\n      position: initial;\n      padding: 5px 10px;\n      display: block; }\n    .module-content .headerMap .col-bind .barra-tipo .create {\n      font-size: 14px;\n      position: absolute;\n      bottom: 10px;\n      left: 10px;\n      margin: 0;\n      padding: 0;\n      display: block;\n      top: auto; }\n    .module-content .headerMap .col-bind .barra-tipo .discipline {\n      background: #fff;\n      color: #00BBFF;\n      font-size: 11px;\n      padding: 3px;\n      right: 10px;\n      top: 34px;\n      left: auto;\n      text-transform: uppercase;\n      position: absolute; }\n  .module-content .titulos {\n    font-size: 22px;\n    border-bottom: 1px solid #00BBFF;\n    width: 100%;\n    margin-top: 35px;\n    padding-bottom: 7px;\n    padding-left: 25px; }\n  .module-content .chamada-box {\n    position: relative; }\n  .module-content .carousel-generic {\n    height: 260px;\n    border: none; }\n    .module-content .carousel-generic div .swiper-container {\n      height: 245px; }\n      .module-content .carousel-generic div .swiper-container .icon-seta-drop {\n        top: 200px; }\n  .module-content .swiper-wrapper .count-student {\n    float: left;\n    margin-top: -25px;\n    margin-left: 43%;\n    color: #B3B6B9;\n    font-size: 18px;\n    font-weight: 100; }\n  .module-content .swiper-slide-active {\n    border: 1px solid #95989A;\n    min-width: 328px !important;\n    max-height: 134px !important;\n    top: 13px !important; }\n    .module-content .swiper-slide-active div .map-highlighter-inactive {\n      background: #00BBFF;\n      left: 20px;\n      top: 35px;\n      zoom: 1 !important; }\n      .module-content .swiper-slide-active div .map-highlighter-inactive .icon- {\n        color: #fff;\n        left: 19px;\n        position: relative;\n        font-size: 20px;\n        top: 20px; }\n    .module-content .swiper-slide-active .map-name {\n      zoom: 1 !important; }\n    .module-content .swiper-slide-active .toggle {\n      zoom: 1 !important; }\n    .module-content .swiper-slide-active .popover-read-more {\n      top: 119px !important;\n      min-width: 150px;\n      zoom: 1 !important;\n      margin-left: inherit !important;\n      margin-top: inherit !important; }\n    .module-content .swiper-slide-active .map-read-more-icon {\n      zoom: 1 !important;\n      top: 10px !important; }\n    .module-content .swiper-slide-active .read-more-icon-active {\n      zoom: 1 !important;\n      top: 10px !important; }\n  .module-content .container-chamada {\n    background: #fff;\n    width: 100%;\n    height: 300px;\n    position: absolute;\n    z-index: 9;\n    opacity: 0.7;\n    /* For Safari 3.1 to 6.0 */\n    transition: opacity 0.4s;\n    top: -30px; }\n  .module-content .btn-chamada {\n    max-width: 250px;\n    height: 90px;\n    background: #00BBFF;\n    font-size: 21px;\n    border-radius: 5px;\n    border: none;\n    color: #fff;\n    box-shadow: 0px 5px 5px #c1c1c1;\n    position: absolute;\n    z-index: 999;\n    width: 100%;\n    left: 41%;\n    top: 60px;\n    opacity: 1;\n    /* For Safari 3.1 to 6.0 */\n    transition: opacity 0.4s; }\n  .module-content #scrollCarrosel {\n    width: 97%;\n    margin-top: 33px; }\n    .module-content #scrollCarrosel .popover-generic {\n      min-width: 250px;\n      max-height: 102px;\n      top: 15px; }\n      .module-content #scrollCarrosel .popover-generic div .map-highlighter-inactive {\n        background: #00BBFF;\n        left: 20px;\n        top: 35px;\n        zoom: 0.8; }\n        .module-content #scrollCarrosel .popover-generic div .map-highlighter-inactive .icon- {\n          color: #fff;\n          left: 19px;\n          position: relative;\n          font-size: 20px;\n          top: 20px; }\n      .module-content #scrollCarrosel .popover-generic .map-name {\n        zoom: 0.8; }\n      .module-content #scrollCarrosel .popover-generic .toggle {\n        position: relative;\n        width: 60px;\n        height: 30px;\n        float: left;\n        left: 45px;\n        top: 10px;\n        zoom: 0.8; }\n      .module-content #scrollCarrosel .popover-generic .toggle input {\n        opacity: 0;\n        cursor: pointer;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 6;\n        width: 61px;\n        height: 34px; }\n      .module-content #scrollCarrosel .popover-generic .toggle input:checked ~ .btn {\n        left: 27px; }\n      .module-content #scrollCarrosel .popover-generic .toggle input:checked ~ .bg {\n        background: #EE6D52; }\n      .module-content #scrollCarrosel .popover-generic .toggle .btn {\n        display: block;\n        position: absolute;\n        z-index: 4;\n        top: 3px;\n        left: 6px;\n        width: 20px;\n        height: 24px;\n        background: #fff;\n        border-radius: 50%;\n        transition: left 0.25s ease; }\n      .module-content #scrollCarrosel .popover-generic .toggle .btn:after {\n        content: \"\";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -12.5px;\n        margin-left: -12.5px;\n        width: 26px;\n        background: #fff;\n        border-radius: 50%; }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels {\n        position: absolute;\n        top: 10px;\n        z-index: 2;\n        width: 100%;\n        font-family: Helvetica, sans-serif;\n        font-weight: bold;\n        color: #fff;\n        text-transform: uppercase;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels:before {\n        content: \"\\2713\";\n        position: absolute;\n        top: -5px;\n        zoom: 1.2;\n        left: 30px; }\n      .module-content #scrollCarrosel .popover-generic .toggle .labels:after {\n        content: \"F\";\n        position: absolute;\n        right: 36px;\n        top: -6px; }\n      .module-content #scrollCarrosel .popover-generic .toggle .bg {\n        display: block;\n        position: absolute;\n        z-index: 0;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 40px;\n        background: #0093D0; }\n      .module-content #scrollCarrosel .popover-generic .popover-read-more {\n        top: 30px !important;\n        min-width: 150px;\n        zoom: 0.8;\n        margin-left: 12px;\n        margin-top: 19px;\n        left: 176px; }\n      .module-content #scrollCarrosel .popover-generic .map-read-more-icon {\n        zoom: 0.8;\n        top: 5px; }\n      .module-content #scrollCarrosel .popover-generic .read-more-icon-active {\n        zoom: 0.8;\n        top: 5px; }\n\n.popover-generic > .arrow {\n  border-width: 12px; }\n\n/*barra  de status da aplicacao da prova*/\n.container-status {\n  min-width: 1024px;\n  position: relative;\n  background: #FAFAFA;\n  width: 100%;\n  height: 100px;\n  margin-bottom: 70px; }\n  .container-status .barra-data {\n    width: 130px;\n    height: 58px;\n    float: left;\n    left: 20px;\n    text-align: center;\n    position: relative;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    top: 20px; }\n    .container-status .barra-data span {\n      color: #95989A;\n      font-size: 32px;\n      position: relative;\n      top: 10px; }\n  .container-status .barra-status {\n    width: 425px;\n    height: 45px;\n    position: relative;\n    float: right;\n    text-align: center;\n    border-radius: 5px;\n    top: 35px; }\n    .container-status .barra-status span {\n      color: #95989A;\n      font-size: 14px;\n      position: relative;\n      margin-right: 25px; }\n    .container-status .barra-status .btn {\n      background: #fff;\n      width: 182px;\n      height: 40px;\n      color: #B5B5B5;\n      border: 1px solid #B5B5B5; }\n      .container-status .barra-status .btn:hover {\n        background: #DDDDDD;\n        color: #B6B6B6 !important; }\n      .container-status .barra-status .btn:active {\n        color: #fff !important;\n        background: #CCCCCC; }\n  .container-status .bio {\n    position: relative;\n    width: 300px;\n    float: left;\n    font-size: 14px;\n    left: 20px;\n    top: 20px; }\n    .container-status .bio .discipline {\n      min-width: 73px;\n      height: 21px;\n      background: #00BBFF;\n      color: #fff;\n      font-size: 11px;\n      padding: 3px;\n      left: 45px;\n      text-align: center;\n      float: left;\n      text-transform: uppercase; }\n    .container-status .bio .icon-person {\n      zoom: 0.6;\n      float: left;\n      margin-top: 22px;\n      margin-left: -5px; }\n    .container-status .bio span {\n      margin: 12px; }\n    .container-status .bio small {\n      position: absolute;\n      float: left;\n      top: 13px; }\n    .container-status .bio .font-prova {\n      font-size: 18px; }\n  .container-status .font-prova {\n    position: absolute;\n    top: 55px;\n    left: 164px;\n    font-size: 22px; }\n\n/*a partir daqui será as iterações com drag drop*/\n.container-drag {\n  background: #FAFAFA;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 70% 30%;\n      grid-template-columns: 70% 30%;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  grid-template-areas: \"items assets\"; }\n  .container-drag .class-main {\n    grid-area: items;\n    margin: 5px; }\n  .container-drag .class-assets {\n    grid-area: assets;\n    margin: 5px; }\n  .container-drag .geral-tit {\n    font-size: 22px;\n    background: #8E86F7;\n    color: #fff;\n    height: 48px;\n    border-radius: 4px;\n    border: none;\n    margin: 0;\n    padding-left: 25px;\n    padding-bottom: 0;\n    padding-top: 7px;\n    margin-bottom: 20px;\n    width: auto !important; }\n    .container-drag .geral-tit .icon-aulas {\n      float: left; }\n    .container-drag .geral-tit .icon-anexo {\n      float: left;\n      zoom: 0.7;\n      margin-top: 5px; }\n    .container-drag .geral-tit .icon-grid {\n      float: left;\n      zoom: 0.7;\n      margin-top: 5px; }\n    .container-drag .geral-tit div {\n      font-weight: 100;\n      position: relative;\n      left: 15px;\n      top: 3px; }\n  .container-drag .tit-anexo {\n    background: #61CAD8; }\n  .container-drag .tit-recurso {\n    background: #F4AD67; }\n  .container-drag .container-drag-in {\n    margin-bottom: 20px;\n    width: auto !important; }\n    .container-drag .container-drag-in .container-sub-anexo {\n      height: 242px; }\n      .container-drag .container-drag-in .container-sub-anexo .container-button {\n        width: 328px;\n        position: relative;\n        float: left;\n        margin: 1%;\n        height: 203px; }\n      .container-drag .container-drag-in .container-sub-anexo .add-button {\n        height: auto;\n        top: 0;\n        margin-top: inherit;\n        left: 100px;\n        position: relative; }\n    .container-drag .container-drag-in .container-sub-recurso {\n      height: 395px; }\n    .container-drag .container-drag-in .btn-more {\n      width: 70%;\n      position: absolute;\n      text-align: center;\n      max-width: 1119px;\n      margin-top: 30px; }\n      .container-drag .container-drag-in .btn-more button {\n        background: #F7F7F7;\n        width: 121px;\n        height: 33px;\n        color: #B5B5B5;\n        border: 1px solid #B5B5B5; }\n        .container-drag .container-drag-in .btn-more button:hover {\n          background: #DDDDDD;\n          color: #B6B6B6 !important; }\n        .container-drag .container-drag-in .btn-more button:active {\n          color: #fff !important;\n          background: #CCCCCC; }\n  .container-drag .container-anexo {\n    height: 342px; }\n  .container-drag .container-recurso {\n    height: 480px; }\n  .container-drag .container-drop {\n    height: calc(100% - 52px); }\n    .container-drag .container-drop .sortable-wrapper {\n      height: 100%;\n      position: none;\n      left: 0;\n      top: 0;\n      margin: 0; }\n  .container-drag .publicar {\n    height: 39px;\n    background: #52C150;\n    color: #fff;\n    font-size: 14px;\n    width: 383px;\n    margin: 10px 0;\n    border: 2px solid #52C150; }\n    .container-drag .publicar:hover {\n      border: 2px solid #43AF41; }\n    .container-drag .publicar:active {\n      background: #43AF41; }\n\n/*tabs*/\n.tab-section {\n  padding: 50px;\n  padding-left: 20px; }\n  .tab-section ul.tab-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .tab-section ul.tab-menu .tab-link {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      list-style: none;\n      border: 1px solid #fff;\n      font-size: 16px;\n      border-radius: 18px;\n      font-weight: lighter;\n      text-align: center;\n      margin: 5px; }\n      .tab-section ul.tab-menu .tab-link a {\n        color: #9A9C9E !important;\n        text-decoration: none;\n        display: block;\n        padding: 5px 15px; }\n      .tab-section ul.tab-menu .tab-link:hover {\n        background-color: #eee; }\n    .tab-section ul.tab-menu .tab-link.tab-active {\n      color: #fff !important;\n      background-color: #00ACEC !important;\n      transition: background-color 0.8s;\n      border: 1px solid #ddd; }\n      .tab-section ul.tab-menu .tab-link.tab-active a {\n        color: #fff !important; }\n  .tab-section .tab-content {\n    white-space: pre-line;\n    font-size: 12px;\n    margin-top: 20px;\n    line-height: 16px; }\n\n.container-anotacao {\n  width: 100%;\n  position: relative;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container-anotacao .add-button {\n    margin: 25px 60px;\n    float: none;\n    width: auto;\n    height: auto;\n    left: unset;\n    top: unset;\n    position: unset; }\n  .container-anotacao .map-content-popover {\n    width: 75%;\n    float: none;\n    position: unset;\n    margin: 0; }\n    .container-anotacao .map-content-popover .icon-favorite {\n      color: #00BBFF;\n      float: right;\n      right: 13px;\n      position: relative;\n      top: -3px; }\n    .container-anotacao .map-content-popover .cont-anotation {\n      height: 400px;\n      margin: 25px; }\n    .container-anotacao .map-content-popover .map-name {\n      padding-top: 15px;\n      left: 20px;\n      width: 269px;\n      font-size: 20px; }\n    .container-anotacao .map-content-popover small {\n      position: relative;\n      left: 20px;\n      top: 3px; }\n    .container-anotacao .map-content-popover .descripition {\n      padding: 20px;\n      position: relative;\n      font-size: 18px;\n      font-weight: 300;\n      min-height: 315px; }\n    .container-anotacao .map-content-popover .map-read-more-icon {\n      top: -36px;\n      z-index: 3; }\n    .container-anotacao .map-content-popover .map-read-more-icon-active {\n      top: -36px;\n      z-index: 3; }\n    .container-anotacao .map-content-popover .popover-read-more {\n      top: 15px !important;\n      left: 176px;\n      z-index: 2; }\n\n@media (max-width: 1543px) {\n  .container-drag .geral-tit {\n    width: 60%; }\n  .container-drag .container-drag-in {\n    width: 60%; }\n    .container-drag .container-drag-in .btn-more {\n      width: 88%;\n      max-width: 706px;\n      position: relative; } }\n\n.new-anotation {\n  font-size: 16px;\n  padding: 30px;\n  color: #5A5D5F; }\n  .new-anotation .btn-success, .new-anotation .btn-default {\n    float: right;\n    width: 84px;\n    height: 39px;\n    padding-top: 8px;\n    margin: 10px; }\n  .new-anotation .btn-default:hover {\n    background-color: #B6B6B6 !important; }\n  .new-anotation .form-control {\n    border: 1px solid #E8E8E8;\n    border-radius: 0;\n    height: 59px;\n    max-width: 772px; }\n    .new-anotation .form-control:hover {\n      border: 1px solid #656565;\n      background: #fff !important; }\n    .new-anotation .form-control:focus {\n      border: 1px solid #656565;\n      background: #fff !important; }\n  .new-anotation p {\n    color: #95989A; }\n  .new-anotation .radio-inline input[type=radio] {\n    position: absolute;\n    margin-top: 0px;\n    margin-left: -25px;\n    height: 16px;\n    box-shadow: none; }\n  .new-anotation .radio-inline {\n    margin: 0.5rem;\n    padding-left: 0; }\n    .new-anotation .radio-inline label {\n      font-weight: 400; }\n  .new-anotation textarea {\n    border: 1px solid #E8E8E8;\n    border-radius: 0;\n    overflow: auto;\n    resize: both !important;\n    min-width: 660px;\n    width: 100% !important;\n    height: 345px;\n    padding: 20px;\n    padding-top: 10px; }\n    .new-anotation textarea:hover {\n      border: 1px solid #656565;\n      background: #fff !important; }\n    .new-anotation textarea:focus {\n      border: 1px solid #656565;\n      background: #fff !important; }\n\n.class-sortable-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .class-sortable-wrapper .class-sortable-item {\n    border: 1px solid red; }\n\n.card-holder {\n  width: 328px;\n  display: inline-block;\n  margin: 1%; }\n  .card-holder:hover .card-author:before {\n    border: solid #9F9F9F;\n    border-width: 0px 1px 1px 0; }\n  .card-holder:hover .card {\n    border: 1px solid #9F9F9F; }\n\n.card {\n  width: 328px;\n  height: 134px;\n  background: #fff;\n  border: 1px solid #E8E8E8;\n  margin: 1%;\n  transition: border 0.3s;\n  border-radius: 6px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .card:hover {\n    border: 1px solid #9F9F9F; }\n  .card .card-img {\n    width: 328px; }\n  .card .card-bullet {\n    background: #00BBFF;\n    color: #fff;\n    font-size: 20px;\n    width: 60px;\n    height: 60px;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 65px;\n    border-radius: 50%;\n    margin: 25px; }\n  .card .card-title {\n    width: 190px; }\n\n.card-thumb {\n  height: 294px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: end; }\n  .card-thumb .card-title {\n    width: auto; }\n  .card-thumb .thumb {\n    width: 327px;\n    height: 161px;\n    overflow: hidden; }\n    .card-thumb .thumb img {\n      min-width: 327px;\n      max-width: 327px; }\n\n.card-author {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative; }\n  .card-author:before {\n    content: \"\";\n    border: solid #E8E8E8;\n    border-width: 0px 1px 1px 0;\n    display: block;\n    padding: 7px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    position: absolute;\n    left: 36px;\n    top: -10px;\n    background: #fff;\n    transition: border-bottom-color 0.8s, border-right-color 0.8s;\n    zoom: 1; }\n  .card-author span {\n    width: 200px; }\n  .card-author .card-author-avatar {\n    width: 50px;\n    height: 50px;\n    background: #CCCCCC;\n    border-radius: 50%;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 52px;\n    color: #fff;\n    font-size: 20px;\n    margin: 20px; }\n    .card-author .card-author-avatar.icon-icon-ftd::before {\n      color: #fff; }\n\n.card.card-type-class {\n  border: 1px solid #8E86F7;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-class .card-bullet {\n    background-color: #8E86F7; }\n  .card.card-type-class:hover {\n    border: 1px solid #5C57A1;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-class:hover .card-bullet {\n    background-color: #5C57A1; }\n\n.card.card-type-file {\n  border: 1px solid #61CAD8;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-file .card-bullet {\n    background-color: #61CAD8; }\n  .card.card-type-file:hover {\n    border: 1px solid #4896A1;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-file:hover .card-bullet {\n    background-color: #4896A1; }\n\n.card.card-type-resource {\n  border: 1px solid #F4AD67;\n  border-width: 1px 1px 1px 10px;\n  margin: 20px 24px; }\n  .card.card-type-resource .card-bullet {\n    background-color: #F4AD67; }\n  .card.card-type-resource:hover {\n    border: 1px solid #A17244;\n    border-width: 1px 1px 1px 10px; }\n  .card.card-type-resource:hover .card-bullet {\n    background-color: #A17244; }\n\n.confirmation-panel {\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 30px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .confirmation-panel span {\n    width: 80px;\n    height: 80px;\n    background-color: #5cb85c;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 50%;\n    color: #fff;\n    margin: 20px; }\n  .confirmation-panel .confirmation-content p {\n    margin-bottom: 30px;\n    margin-top: 30px; }\n  .confirmation-panel .confirmation-content .btn.btn-white {\n    font-size: 12px;\n    min-width: 100px;\n    border: 1px solid #999;\n    background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/classroom/student/classroom-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClassroomStudentComponent = (function () {
    function ClassroomStudentComponent(http, auth, bsModalRef, modalService, formBuilder) {
        this.http = http;
        this.auth = auth;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.busy = [];
        /**
         * @var Array A list of exams scheduled to the group discipline class date
        */
        this.exams = [];
        /**
         * @var boolean Define if the group discipline has an planner map attached
        */
        this.hasMap = false;
    }
    ClassroomStudentComponent.prototype.ngOnInit = function () {
        this.modalServiceConfig = this.modalService.config;
        this.model = this.modalServiceConfig.model;
        this.class_id = this.model.meta.id; // ID CLASSE
        this.loadClass();
    };
    ClassroomStudentComponent.prototype.loadClass = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* URLSearchParams */]();
        params.set('complete', '1');
        this.busy.push(this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__routes_api_routes__["a" /* API_ROUTES */].class.index.url(this.class_id), { search: params })
            .toPromise()
            .then(function (response) {
            _this.class = response.json().data;
            if (Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["has"])(_this.class, 'group_discipline.planner_map_id') ? (_this.class.group_discipline.planner_map_id != null) : false) {
                _this.hasMap = true;
                _this.selectedItem = _this.class.class_sequence.sequence.item[0].type.id;
            }
            _this.loadExams();
        }));
    };
    /**
     * Load a list of GASP exams scheduled to the group discipline class date
     @return void
    */
    ClassroomStudentComponent.prototype.loadExams = function () {
        var _this = this;
        var _url = __WEBPACK_IMPORTED_MODULE_7__routes_api_routes__["a" /* API_ROUTES */].gasp.exam.student.url();
        var _params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* URLSearchParams */]();
        _params.set('date_start', this.class.date + ' 00:00:01');
        _params.set('date_end', this.class.date + ' 23:59:59');
        this.busy = [];
        this.busy.push(this.http
            .get(_url, { search: _params })
            .toPromise()
            .then(function (response) {
            var _exams = response.json().data;
            if (_exams.length) {
                _this.exams = _exams.map(function (_exam, _key) {
                    var _now = __WEBPACK_IMPORTED_MODULE_5_moment__();
                    var _dt_start = (_exam.date_start) ? __WEBPACK_IMPORTED_MODULE_5_moment__(_exam.date_start) : null;
                    var _dt_end = (_exam.date_end) ? __WEBPACK_IMPORTED_MODULE_5_moment__(_exam.date_end) : null;
                    var _diff = (_dt_end) ? _dt_end.diff(_dt_start) : null;
                    var _passed = (_dt_start) ? _now.diff(_dt_start) : null;
                    var _percent = (_passed && _diff) ? (100 * _passed) / _diff : null;
                    _percent = (_percent) ? _percent : 0;
                    var _status;
                    var _status_id = (_exam.exam_student && _exam.exam_student.length) ? _exam.exam_student[0].status : 0;
                    switch (_status_id) {
                        case 0:
                            _status = 'Pendente';
                            break;
                        case 1:
                            _status = 'Entregue';
                            break;
                        case 2:
                            _status = 'Corrigido';
                            break;
                    }
                    return {
                        id: _exam.id,
                        percent: _percent,
                        icon: 'icon-monitor',
                        title: _exam.title,
                        description: _exam.description,
                        discipline: _exam.discipline.name,
                        exam_type: _exam.exam_type,
                        status: _status,
                        is_enable: (_exam.exam_type == 1 && __WEBPACK_IMPORTED_MODULE_5_moment__().isBetween(_dt_start, _dt_end)) ? true : false,
                        autor: _exam.author.name,
                        date_start: (_dt_start) ? _dt_start.format('DD/MM') : null,
                        date_end: (_dt_end) ? _dt_end.format('DD/MM') : null,
                        question_count: _exam.questions_exam_count,
                        time: _exam.exam_time,
                        status_id: _status_id,
                    };
                });
            }
        }));
    };
    return ClassroomStudentComponent;
}());
ClassroomStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-classroom-modal-content',
        template: __webpack_require__("../../../../../src/app/modules/classroom/student/classroom-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/classroom/student/classroom-student.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object])
], ClassroomStudentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=classroom-student.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/calendar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/click.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");



























/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * &commat;NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["b" /* DraggableHelper */],
                config.eventTitleFormatter || __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */],
                config.dateFormatter || __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */],
                config.utils || __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__["a" /* CalendarUtils */]
            ]
        };
    };
    CalendarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                        __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipDirective */],
                        __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                        __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                        __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                        __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                    ],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__["a" /* ResizableModule */], __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["a" /* DragAndDropModule */]],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                        __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                        __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                        __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipDirective */],
                        __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                        __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                        __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                        __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                        __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipWindowComponent */]]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarEventActionsComponent = (function () {
    function CalendarEventActionsComponent() {
    }
    CalendarEventActionsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventActionsComponent.ctorParameters = function () { return []; };
    CalendarEventActionsComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarEventActionsComponent;
}());

//# sourceMappingURL=calendarEventActions.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarEventTitleComponent = (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <a\n      class=\"cal-event-title\"\n      href=\"javascript:;\"\n      [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n    </a>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitleComponent.ctorParameters = function () { return []; };
    CalendarEventTitleComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarEventTitleComponent;
}());

//# sourceMappingURL=calendarEventTitle.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarAllDayEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarAllDayEventComponent = (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarAllDayEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-all-day-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarAllDayEventComponent.ctorParameters = function () { return []; };
    CalendarAllDayEventComponent.propDecorators = {
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarAllDayEventComponent;
}());

//# sourceMappingURL=calendarAllDayEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");





/**
 * @hidden
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
 */
var MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to a segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.start, minutesMoved);
        var newEnd;
        if (dayEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.beforeViewRender.emit({
            body: this.hours
        });
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT
        });
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    CalendarDayViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarDayViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'hourSegments': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayStartHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayStartMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayEndHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayEndMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventSnapSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'hourSegmentTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'allDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'hourSegmentClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarDayViewComponent;
}());

//# sourceMappingURL=calendarDayView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarDayViewEventComponent = (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n        [style.borderColor]=\"dayEvent.event.color.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewEventComponent.ctorParameters = function () { return []; };
    CalendarDayViewEventComponent.propDecorators = {
        'dayEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarDayViewEventComponent;
}());

//# sourceMappingURL=calendarDayViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarDayViewHourSegmentComponent = (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-hour-segment\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewHourSegmentComponent.ctorParameters = function () { return []; };
    CalendarDayViewHourSegmentComponent.propDecorators = {
        'segment': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarDayViewHourSegmentComponent;
}());

//# sourceMappingURL=calendarDayViewHourSegment.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarMonthCellComponent = (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unhighlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarMonthCellComponent.prototype.onEventClick = function (mouseEvent, calendarEvent) {
        if (mouseEvent.stopPropagation) {
            mouseEvent.stopPropagation();
        }
        this.eventClicked.emit({ event: calendarEvent });
    };
    CalendarMonthCellComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events\"\n          [style.backgroundColor]=\"event.color.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"onEventClick($event, event)\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[style.backgroundColor]': 'day.backgroundColor'
                    }
                },] },
    ];
    /** @nocollapse */
    CalendarMonthCellComponent.ctorParameters = function () { return []; };
    CalendarMonthCellComponent.propDecorators = {
        'day': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'highlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'unhighlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarMonthCellComponent;
}());

//# sourceMappingURL=calendarMonthCell.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__ = __webpack_require__("../../../../date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__ = __webpack_require__("../../../../date-fns/set_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__ = __webpack_require__("../../../../date-fns/set_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__ = __webpack_require__("../../../../date-fns/get_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__ = __webpack_require__("../../../../date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__ = __webpack_require__("../../../../date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");











/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default()(day.date);
        var month = __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default()(day.date);
        var date = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default()(day.date);
        var newStart = __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default()(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default()(newStart, event.start);
            newEnd = __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(day.date, _this.viewDate);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"dayClicked.emit({day: day})\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeDayIsOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'cellTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'openDayEventsTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'dayClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarMonthViewComponent;
}());

//# sourceMappingURL=calendarMonthView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarMonthViewHeaderComponent = (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarMonthViewHeaderComponent.propDecorators = {
        'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarMonthViewHeaderComponent;
}());

//# sourceMappingURL=calendarMonthViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarOpenDayEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");


var CalendarOpenDayEventsComponent = (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('collapse', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: 0, overflow: 'hidden' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: '*' }))
                            ]),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: '*', overflow: 'hidden' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ height: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarOpenDayEventsComponent.ctorParameters = function () { return []; };
    CalendarOpenDayEventsComponent.propDecorators = {
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarOpenDayEventsComponent;
}());

//# sourceMappingURL=calendarOpenDayEvents.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");





/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.eventRows = [];
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](weekViewContainer, this.getDayColumnWidth(weekViewContainer));
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var currentResize = this.currentResizes.get(weekEvent);
        var daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var daysDragged = draggedByPx / dayWidth;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.start, daysDragged);
        var newEnd;
        if (weekEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.beforeViewRender.emit({
            header: this.days
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: getDayColumnWidth(eventRowContainer), right: getDayColumnWidth(eventRowContainer)}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, getDayColumnWidth(eventRowContainer))\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: getDayColumnWidth(eventRowContainer)}\"\n          [validateDrag]=\"validateDrag\"\n          (dragStart)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, getDayColumnWidth(eventRowContainer))\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'precision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewComponent;
}());

//# sourceMappingURL=calendarWeekView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarWeekViewEventComponent = (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewEventComponent.ctorParameters = function () { return []; };
    CalendarWeekViewEventComponent.propDecorators = {
        'weekEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipAppendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewEventComponent;
}());

//# sourceMappingURL=calendarWeekViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var CalendarWeekViewHeaderComponent = (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarWeekViewHeaderComponent.propDecorators = {
        'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'eventDropped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CalendarWeekViewHeaderComponent;
}());

//# sourceMappingURL=calendarWeekViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNextViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__ = __webpack_require__("../../../../date-fns/add_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("../../../../date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);




/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    CalendarNextViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] },
    ];
    /** @nocollapse */
    CalendarNextViewDirective.ctorParameters = function () { return []; };
    CalendarNextViewDirective.propDecorators = {
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarNextViewDirective;
}());

//# sourceMappingURL=calendarNextView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPreviousViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__ = __webpack_require__("../../../../date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__ = __webpack_require__("../../../../date-fns/sub_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__ = __webpack_require__("../../../../date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__);




/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    CalendarPreviousViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] },
    ];
    /** @nocollapse */
    CalendarPreviousViewDirective.ctorParameters = function () { return []; };
    CalendarPreviousViewDirective.propDecorators = {
        'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarPreviousViewDirective;
}());

//# sourceMappingURL=calendarPreviousView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTodayDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__ = __webpack_require__("../../../../date-fns/start_of_today/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__);


/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default()());
    };
    CalendarTodayDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] },
    ];
    /** @nocollapse */
    CalendarTodayDirective.ctorParameters = function () { return []; };
    CalendarTodayDirective.propDecorators = {
        'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return CalendarTodayDirective;
}());

//# sourceMappingURL=calendarToday.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");



var CalendarTooltipWindowComponent = (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipWindowComponent.ctorParameters = function () { return []; };
    CalendarTooltipWindowComponent.propDecorators = {
        'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CalendarTooltipWindowComponent;
}());

var CalendarTooltipDirective = (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; //tslint:disable-line
        this.placement = 'top'; // tslint:disable-line no-input-rename
        this.positioning = new __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] },] },
    ]; };
    CalendarTooltipDirective.propDecorators = {
        'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mwlCalendarTooltip',] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTemplate',] },],
        'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEvent',] },],
        'appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        'onMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return CalendarTooltipDirective;
}());

//# sourceMappingURL=calendarTooltip.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/click.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ClickDirective = (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var eventName = typeof window['Hammer'] !== 'undefined' ? 'tap' : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    ClickDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] },
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ClickDirective.propDecorators = {
        'click': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mwlClick',] },],
    };
    return ClickDirective;
}());

//# sourceMappingURL=click.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_module__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/calendar.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__calendar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* unused harmony reexport DAYS_OF_WEEK */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");


/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    CalendarDatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'calendarDate'
                },] },
    ];
    /** @nocollapse */
    CalendarDatePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ]; };
    return CalendarDatePipe;
}());

//# sourceMappingURL=calendarDate.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitlePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");


var CalendarEventTitlePipe = (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitlePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */], },
    ]; };
    return CalendarEventTitlePipe;
}());

//# sourceMappingURL=calendarEventTitle.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class is responsible for all formatting of dates. There are 2 implementations available, the `CalendarNativeDateFormatter` (default) which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__["a" /* CalendarNativeDateFormatter */]));

//# sourceMappingURL=calendarDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDragHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");

var CalendarDragHelper = (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());

//# sourceMappingURL=calendarDragHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleFormatter; });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

//# sourceMappingURL=calendarEventTitleFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MOMENT */
/* unused harmony export CalendarMomentDateFormatter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var MOMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import * as moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D MMM');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    };
    /** @nocollapse */
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [MOMENT,] },] },
    ]; };
    return CalendarMomentDateFormatter;
}());

//# sourceMappingURL=calendarMomentDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNativeDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__ = __webpack_require__("../../../../date-fns/get_iso_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__);

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting. It is the default date formatter used by the calendar.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var weekNumber = __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());

//# sourceMappingURL=calendarNativeDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarResizeHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");

var CalendarResizeHelper = (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());

//# sourceMappingURL=calendarResizeHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");


var CalendarUtils = (function () {
    function CalendarUtils() {
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["c" /* getMonthView */])(args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["e" /* getWeekViewHeader */])(args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["d" /* getWeekView */])(args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["a" /* getDayView */])(args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["b" /* getDayViewHourGrid */])(args);
    };
    CalendarUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CalendarUtils.ctorParameters = function () { return []; };
    return CalendarUtils;
}());

//# sourceMappingURL=calendarUtils.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInside;
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/dragAndDrop.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droppable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");




var DragAndDropModule = (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule.forRoot = function () {
        return {
            ngModule: DragAndDropModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__draggableHelper_provider__["a" /* DraggableHelper */]
            ]
        };
    };
    return DragAndDropModule;
}());

DragAndDropModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* Draggable */],
                    __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* Droppable */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* Draggable */],
                    __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* Droppable */]
                ]
            },] },
];
/** @nocollapse */
DragAndDropModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dragAndDrop.module.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Draggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__ = __webpack_require__("../../../../rxjs/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");












var MOVE_CURSOR = 'move';
var Draggable = (function () {
    /**
     * @hidden
     */
    function Draggable(element, renderer, draggableHelper, zone) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragAxis = { x: true, y: true };
        this.dragSnapGrid = {};
        this.ghostDragEnabled = true;
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventListenerSubscriptions = {};
    }
    Draggable.prototype.ngOnInit = function () {
        var _this = this;
        this.checkEventListeners();
        var pointerDrag = this.pointerDown
            .filter(function () { return _this.canDrag(); })
            .flatMap(function (pointerDownEvent) {
            pointerDownEvent.event.preventDefault();
            _this.zone.run(function () {
                _this.dragStart.next({ x: 0, y: 0 });
            });
            _this.setCursor(MOVE_CURSOR);
            var currentDrag = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            _this.draggableHelper.currentDrag.next(currentDrag);
            var pointerMove = _this.pointerMove
                .map(function (pointerMoveEvent) {
                pointerMoveEvent.event.preventDefault();
                return {
                    currentDrag: currentDrag,
                    x: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    y: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY
                };
            })
                .map(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.x = Math.floor(moveData.x / _this.dragSnapGrid.x) * _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.y = Math.floor(moveData.y / _this.dragSnapGrid.y) * _this.dragSnapGrid.y;
                }
                return moveData;
            })
                .map(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.x = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.y = 0;
                }
                return moveData;
            })
                .filter(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            })
                .takeUntil(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(_this.pointerUp, _this.pointerDown));
            pointerMove.takeLast(1).subscribe(function (_a) {
                var x = _a.x, y = _a.y;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y });
                });
                currentDrag.complete();
                _this.setCssTransform(null);
                if (_this.ghostDragEnabled) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', null);
                }
            });
            return pointerMove;
        })
            .share();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .merge(pointerDrag.take(1).map(function (value) { return [, value]; }), pointerDrag.pairwise())
            .filter(function (_a) {
            var previous = _a[0], next = _a[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })
            .map(function (_a) {
            var previous = _a[0], next = _a[1];
            return next;
        })
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag = _a.currentDrag, clientX = _a.clientX, clientY = _a.clientY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostDragEnabled) {
                _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', 'none');
            }
            _this.setCssTransform("translate(" + x + "px, " + y + "px)");
            currentDrag.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    Draggable.prototype.ngOnChanges = function (changes) {
        if (changes['dragAxis']) {
            this.checkEventListeners();
        }
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
        this.pointerDown.complete();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    Draggable.prototype.checkEventListeners = function () {
        var _this = this;
        var canDrag = this.canDrag();
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    Draggable.prototype.onMouseDown = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (event) {
                _this.pointerMove.next({ event: event, clientX: event.clientX, clientY: event.clientY });
            });
        }
        this.pointerDown.next({ event: event, clientX: event.clientX, clientY: event.clientY });
    };
    Draggable.prototype.onMouseUp = function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp.next({ event: event, clientX: event.clientX, clientY: event.clientY });
    };
    Draggable.prototype.onTouchStart = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (event) {
                _this.pointerMove.next({ event: event, clientX: event.targetTouches[0].clientX, clientY: event.targetTouches[0].clientY });
            });
        }
        this.pointerDown.next({ event: event, clientX: event.touches[0].clientX, clientY: event.touches[0].clientY });
    };
    Draggable.prototype.onTouchEnd = function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp.next({ event: event, clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY });
    };
    Draggable.prototype.onMouseEnter = function () {
        this.setCursor(MOVE_CURSOR);
    };
    Draggable.prototype.onMouseLeave = function () {
        this.setCursor(null);
    };
    Draggable.prototype.setCssTransform = function (value) {
        if (this.ghostDragEnabled) {
            this.renderer.setStyle(this.element.nativeElement, 'transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-webkit-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-ms-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-moz-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-o-transform', value);
        }
    };
    Draggable.prototype.canDrag = function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    Draggable.prototype.setCursor = function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    Draggable.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            _this.eventListenerSubscriptions[type]();
            delete _this.eventListenerSubscriptions[type];
        });
    };
    return Draggable;
}());

Draggable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDraggable]'
            },] },
];
/** @nocollapse */
Draggable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_11__draggableHelper_provider__["a" /* DraggableHelper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Draggable.propDecorators = {
    'dropData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragAxis': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ghostDragEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'validateDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragging': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var DraggableHelper = (function () {
    function DraggableHelper() {
        this.currentDrag = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    return DraggableHelper;
}());

//# sourceMappingURL=draggableHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droppable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");





function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}
var Droppable = (function () {
    function Droppable(element, draggableHelper, zone) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Droppable.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag) {
            var droppableRectangle = _this.element.nativeElement.getBoundingClientRect();
            var currentDragDropData;
            var overlaps = drag.map(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                return isCoordinateWithinRectangle(clientX, clientY, droppableRectangle);
            });
            var overlapsChanged = overlaps.distinctUntilChanged();
            var dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                dragOverActive = true;
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged
                .pairwise()
                .filter(function (_a) {
                var didOverlap = _a[0], overlapsNow = _a[1];
                return didOverlap && !overlapsNow;
            })
                .subscribe(function () {
                dragOverActive = false;
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag.flatMap(function () { return overlaps; }).subscribe({
                complete: function () {
                    if (dragOverActive) {
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.currentDragSubscription.unsubscribe();
    };
    return Droppable;
}());

Droppable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDroppable]'
            },] },
];
/** @nocollapse */
Droppable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__draggableHelper_provider__["a" /* DraggableHelper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Droppable.propDecorators = {
    'dragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'drop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragAndDrop_module__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/dragAndDrop.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dragAndDrop_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__draggableHelper_provider__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resizable_module__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resizable_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* unused harmony reexport Resizable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");
/* unused harmony reexport ResizeHandle */

 // tslint:disable-line
 // tslint:disable-line
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MOUSE_MOVE_THROTTLE_MS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resizable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__ = __webpack_require__("../../../../rxjs/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");














function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop,
            bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop,
            left: element.nativeElement.offsetLeft,
            right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft
        };
    }
    else {
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top,
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            right: boundingRect.right
        };
    }
}
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'ew-resize',
    topOrBottom: 'ns-resize'
});
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = newRectangle[edge] - initialRectangle[edge];
    });
    return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = 'resize-active';
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable [resizeEdges]="{bottom: true, right: true, top: true, left: true}" [enableGhostResize]="true"&gt;&lt;/div&gt;
 * ```
 */
var Resizable = (function () {
    /**
     * @hidden
     */
    function Resizable(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pointerEventListenerSubscriptions = {};
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    Resizable.prototype.ngOnInit = function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListenerSubscriptions.pointerDown = this.pointerEventListeners.pointerDown.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListenerSubscriptions.pointerMove = this.pointerEventListeners.pointerMove.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListenerSubscriptions.pointerUp = this.pointerEventListeners.pointerUp.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        var currentResize;
        var removeGhostElement = function () {
            if (currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        var mouseMove = this.mousemove.share();
        mouseMove
            .filter(function () { return !!currentResize; })
            .subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove.throttle(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(MOUSE_MOVE_THROTTLE_MS); }).subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var resizeEdges = getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            var cursor = currentResize ? '' : getResizeCursor(resizeEdges, resizeCursors);
            _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        var mousedrag = this.mousedown.flatMap(function (startCoords) {
            var getDiff = function (moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            };
            var getSnapGrid = function () {
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right && currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            var getGrid = function (coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            };
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(mouseMove.take(1).map(function (coords) { return [, coords]; }), mouseMove.pairwise()).map(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
            }).filter(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                if (!previousCoords) {
                    return true;
                }
                var snapGrid = getSnapGrid();
                var previousGrid = getGrid(previousCoords, snapGrid);
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }).map(function (_a) {
                var newCoords = _a[1];
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }).takeUntil(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(_this.mouseup, _this.mousedown));
        }).filter(function () { return !!currentResize; });
        mousedrag.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
        }).filter(function (newBoundingRect) {
            return newBoundingRect.height > 0 && newBoundingRect.width > 0;
        }).filter(function (newBoundingRect) {
            return _this.validateResize ? _this.validateResize({
                rectangle: newBoundingRect,
                edges: getEdgesDiff({
                    edges: currentResize.edges,
                    initialRectangle: currentResize.startingRect,
                    newRectangle: newBoundingRect
                })
            }) : true;
        }).subscribe(function (newBoundingRect) {
            if (currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: currentResize.edges,
                        initialRectangle: currentResize.startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            currentResize.currentRect = newBoundingRect;
        });
        this.mousedown.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return edges || getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
        }).filter(function (edges) {
            return Object.keys(edges).length > 0;
        }).subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({ edges: edges, initialRectangle: startingRect, newRectangle: startingRect }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: currentResize.edges,
                            initialRectangle: currentResize.startingRect,
                            newRectangle: currentResize.currentRect
                        }),
                        rectangle: currentResize.currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.resizeHandles.forEach(function (handle) {
            handle.resizable = _this;
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngOnDestroy = function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.pointerEventListenerSubscriptions.pointerDown.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerMove.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerUp.unsubscribe();
    };
    Resizable.prototype.setElementClass = function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    return Resizable;
}());

Resizable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizable]'
            },] },
];
/** @nocollapse */
Resizable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Resizable.propDecorators = {
    'validateResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'enableGhostResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursors': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursorPrecision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ghostElementPositioning': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeHandles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__["a" /* ResizeHandle */],] },],
};
var PointerEventListeners = (function () {
    function PointerEventListeners(renderer, zone) {
        var _this = this;
        zone.runOutsideAngular(function () {
            _this.pointerDown = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseDown();
                    unsubscribeTouchStart();
                };
            }).share();
            _this.pointerMove = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({ clientX: event.targetTouches[0].clientX, clientY: event.targetTouches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseMove();
                    unsubscribeTouchMove();
                };
            }).share();
            _this.pointerUp = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
                var unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseUp();
                    unsubscribeTouchEnd();
                    unsubscribeTouchCancel();
                };
            }).share();
        });
    }
    PointerEventListeners.getInstance = function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());
//# sourceMappingURL=resizable.directive.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");



var ResizableModule = (function () {
    function ResizableModule() {
    }
    return ResizableModule;
}());

ResizableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]],
                exports: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]]
            },] },
];
/** @nocollapse */
ResizableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=resizable.module.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable&gt;
 *   &lt;div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * ```
 */
var ResizeHandle = (function () {
    function ResizeHandle(renderer, element, zone) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    ResizeHandle.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMousedown = function (event, mouseX, mouseY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (event) {
                    _this.onMousemove(event, event.targetTouches[0].clientX, event.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (event) {
                    _this.onMousemove(event, event.clientX, event.clientY);
                });
            }
            _this.resizable.mousedown.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMouseup = function (mouseX, mouseY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    ResizeHandle.prototype.onMousemove = function (event, mouseX, mouseY) {
        this.resizable.mousemove.next({ mouseX: mouseX, mouseY: mouseY, edges: this.resizeEdges, event: event });
    };
    ResizeHandle.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            _this.eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    return ResizeHandle;
}());

ResizeHandle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizeHandle]'
            },] },
];
/** @nocollapse */
ResizeHandle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ResizeHandle.propDecorators = {
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onMousedown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] },],
    'onMouseup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] },],
};
//# sourceMappingURL=resizeHandle.directive.js.map

/***/ }),

/***/ "../../../../calendar-utils/dist/calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DAYS_OF_WEEK */
/* unused harmony export SECONDS_IN_DAY */
/* unused harmony export SECONDS_IN_WEEK */
/* unused harmony export getWeekViewEventOffset */
/* harmony export (immutable) */ __webpack_exports__["e"] = getWeekViewHeader;
/* harmony export (immutable) */ __webpack_exports__["d"] = getWeekView;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMonthView;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDayView;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDayViewHourGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__ = __webpack_require__("../../../../date-fns/end_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__ = __webpack_require__("../../../../date-fns/difference_in_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__ = __webpack_require__("../../../../date-fns/start_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__ = __webpack_require__("../../../../date-fns/get_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__ = __webpack_require__("../../../../date-fns/start_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__ = __webpack_require__("../../../../date-fns/end_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__ = __webpack_require__("../../../../date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__ = __webpack_require__("../../../../date-fns/end_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__ = __webpack_require__("../../../../date-fns/is_same_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__ = __webpack_require__("../../../../date-fns/is_same_second/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__ = __webpack_require__("../../../../date-fns/set_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__ = __webpack_require__("../../../../date-fns/set_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__ = __webpack_require__("../../../../date-fns/start_of_minute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__ = __webpack_require__("../../../../date-fns/difference_in_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__ = __webpack_require__("../../../../date-fns/add_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max__ = __webpack_require__("../../../../date-fns/max/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_max__);





















var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * DAYS_IN_WEEK;
function getExcludedSeconds(_a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var endDate = __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(startDate, seconds - 1);
    var dayStart = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(startDate);
    var dayEnd = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(endDate, 0));
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds({ dayStart: dayStart, dayEnd: dayEnd, day: day, precision: precision, startDate: startDate, endDate: endDate });
        }
        current = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(_a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(endDate, __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    var span = SECONDS_IN_DAY;
    var begin = __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default()(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.end, begin);
                break;
            default:
                span = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(event.end, 1), begin) * SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds 7days
    if (totalLength > SECONDS_IN_WEEK) {
        span = SECONDS_IN_WEEK - offsetSeconds;
    }
    span -= getExcludedSeconds({ startDate: begin, seconds: span, excluded: excluded, precision: precision });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeek = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    if (event.start < startOfWeek) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(event.start), startOfWeek) * SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.start, startOfWeek);
            break;
    }
    offset -= getExcludedSeconds({ startDate: startOfWeek, seconds: offset, excluded: excluded, precision: precision });
    return offset / SECONDS_IN_DAY;
}
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodEnd)) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) { return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd }); });
}
function getWeekDay(_a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var today = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default()(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(date)) > -1
    };
}
function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays;
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var days = [];
    var _loop_2 = function (i) {
        var date = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(start, i);
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            days.push(getWeekDay({ date: date, weekendDays: weekendDays }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_2(i);
    }
    return days;
}
function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e;
    if (!events) {
        events = [];
    }
    var startOfViewWeek = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var endOfViewWeek = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var maxRange = DAYS_IN_WEEK - excluded.length;
    var eventsMapped = getEventsInPeriod({ events: events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek }).map(function (event) {
        var offset = getWeekViewEventOffset({ event: event, startOfWeek: startOfViewWeek, excluded: excluded, precision: precision });
        var span = getWeekViewEventSpan({ event: event, offset: offset, startOfWeekDate: startOfViewWeek, excluded: excluded, precision: precision });
        return { event: event, offset: offset, span: span };
    }).filter(function (e) { return e.offset < maxRange; }).filter(function (e) { return e.span > 0; }).map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek
    }); }).sort(function (itemA, itemB) {
        var startSecondsDiff = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var eventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= DAYS_IN_WEEK &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            eventRows.push({
                row: [
                    event
                ].concat(otherRowEvents)
            });
        }
    });
    return eventRows;
}
function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default()(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default()(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewStart, { weekStartsOn: weekStartsOn });
    var end = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_3 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            var day = getWeekDay({ date: date, weekendDays: weekendDays });
            var events_1 = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(date),
                periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(date)
            });
            day.inMonth = __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default()(date, viewDate);
            day.events = events_1;
            day.badgeTotal = events_1.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(end, start) + 1; i++) {
        _loop_3(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
        var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
        var isRowInMonth = row.some(function (day) { return day.date.getMonth() === viewDate.getMonth(); });
        if (isRowInMonth) {
            days = days.concat(row);
        }
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days
    };
}
function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var dayViewEvents = getEventsInPeriod({
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    }).sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = previousDayEvents.filter(function (previousEvent) {
            var previousEventTop = previousEvent.top;
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    }).filter(function (dayEvent) { return dayEvent.height > 0; });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod({
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(startOfView),
        periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents
    };
}
function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var hours = [];
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "../../../../date-fns/add_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "../../../../date-fns/add_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "../../../../date-fns/add_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "../../../../date-fns/add_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "../../../../date-fns/add_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "../../../../date-fns/add_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "../../../../date-fns/add_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "../../../../date-fns/compare_asc/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "../../../../date-fns/difference_in_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "../../../../date-fns/difference_in_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "../../../../date-fns/difference_in_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "../../../../date-fns/difference_in_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "../../../../date-fns/end_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "../../../../date-fns/end_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "../../../../date-fns/end_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "../../../../date-fns/get_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "../../../../date-fns/get_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "../../../../date-fns/get_days_in_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "../../../../date-fns/get_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "../../../../date-fns/get_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "../../../../date-fns/get_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "../../../../date-fns/get_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "../../../../date-fns/is_date/index.js":
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "../../../../date-fns/is_same_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "../../../../date-fns/is_same_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "../../../../date-fns/is_same_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__("../../../../date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "../../../../date-fns/max/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "../../../../date-fns/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("../../../../date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "../../../../date-fns/set_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "../../../../date-fns/set_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "../../../../date-fns/set_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "../../../../date-fns/set_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "../../../../date-fns/set_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "../../../../date-fns/start_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "../../../../date-fns/start_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "../../../../date-fns/start_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "../../../../date-fns/start_of_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "../../../../date-fns/start_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "../../../../date-fns/start_of_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "../../../../date-fns/start_of_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ "../../../../date-fns/start_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "../../../../date-fns/sub_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "../../../../date-fns/sub_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "../../../../date-fns/sub_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__("../../../../date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=classroom.module.chunk.js.map