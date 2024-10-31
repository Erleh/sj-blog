import { Component } from '@angular/core';
import { DiscordSvgIconComponent } from "../common/svgs/discord-svg-icon/discord-svg-icon.component";
import { YoutubeSvgIconComponent } from "../common/svgs/youtube-svg-icon/youtube-svg-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DiscordSvgIconComponent, YoutubeSvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
